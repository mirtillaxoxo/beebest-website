export const beeBestDomain = new URL('https://beebest.it')

export const useWebsiteInfo = () =>
  ({
    beeBest: {
      // website
      websiteUrl: beeBestDomain.href,

      websiteName: 'BeeBest',
      websiteDescription:
        'Consultancy • Digital Agency ~ We believe in Improving',

      // social
      socialProfiles: [
        // {
        //   name: 'instagram',
        //   url: '', // #TODO add Instagram profile url
        // },
        {
          name: 'linkedin',
          url: 'https://it.linkedin.com/company/beebest',
        },

        // {
        //   name: 'twitter',
        //   url: '', // #TODO add Instagram profile url
        // },
      ],

      // email
      emailHostname: beeBestDomain.hostname,
    },
  }) as const
