import { DEFAULT_SITE_URL } from './siteConstants';

export const SITE_NAME = 'DowlatGlobal Smart Service';
const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
export const SITE_URL = (configuredSiteUrl || DEFAULT_SITE_URL).replace(/\/+$/, '');
export const SITE_DEFAULT_IMAGE = `${(configuredSiteUrl || DEFAULT_SITE_URL).replace(/\/+$/, '')}/og-image.png`;
export const SITE_DEFAULT_TITLE = 'DowlatGlobal Smart Service - বাংলাদেশ সকল সেবা পোর্টাল';
export const SITE_DEFAULT_DESCRIPTION = 'সরকারি সেবা, চাকরি, শিক্ষা, সংবাদ, টিভি, ইসলামি কনটেন্ট ও বিভিন্ন অনলাইন রিসোর্সের দরকারি লিংক এক জায়গায় খুঁজুন।';
