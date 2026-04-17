using System;
namespace DowlatGlobal.Core.Exceptions
{
    public class ApiException : Exception
    {
        public ApiException() { }
        public ApiException(string message) : base(message) { }
    }
    
    public class NotFoundException : Exception
    {
        public NotFoundException(string message) : base(message) { }
    }
    
    public class ValidationException : Exception
    {
        public ValidationException(string message) : base(message) { }
    }
}
