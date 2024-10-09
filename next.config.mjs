import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

export default withNextIntl(nextConfig);