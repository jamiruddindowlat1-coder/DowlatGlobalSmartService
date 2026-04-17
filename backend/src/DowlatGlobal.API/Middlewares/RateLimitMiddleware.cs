namespace DowlatGlobal.API.Middlewares;

public class RateLimitMiddleware
{
    private readonly RequestDelegate _next;
    private static readonly Dictionary<string, (int Count, DateTime ResetTime)> _requests = new();
    private const int MaxRequests = 100;
    private const int WindowSeconds = 60;

    public RateLimitMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var ip = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";
        var now = DateTime.UtcNow;

        if (_requests.TryGetValue(ip, out var record))
        {
            if (now < record.ResetTime)
            {
                if (record.Count >= MaxRequests)
                {
                    context.Response.StatusCode = 429;
                    await context.Response.WriteAsync("Too many requests.");
                    return;
                }
                _requests[ip] = (record.Count + 1, record.ResetTime);
            }
            else
            {
                _requests[ip] = (1, now.AddSeconds(WindowSeconds));
            }
        }
        else
        {
            _requests[ip] = (1, now.AddSeconds(WindowSeconds));
        }

        await _next(context);
    }
}
