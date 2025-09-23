// src/lib/storyblok.tsx

import { apiPlugin, storyblokInit, getStoryblokApi } from "@storyblok/react/rsc";
import Page from "../app/components/Page";
import SecondaryBannerpage from "../app/components/SecondaryBannerpage";
import Button from "../app/components/Button";
import FeatureGrid from "@/app/components/FeatureGrid";
import CredentialCard from "@/app/components/CredentialCard";
import LinkView from "@/app/components/LinkView";

// This part remains the same
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    secondary_bannerpage: SecondaryBannerpage,
    credential_card:CredentialCard,
     feature_grid:FeatureGrid,
     button:Button,
     link_view:LinkView
  },
});

// The new part: export the initialized API function
export { getStoryblokApi };