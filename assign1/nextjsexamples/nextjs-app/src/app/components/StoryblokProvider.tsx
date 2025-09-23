"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// 1. Import your Page and SecondaryBannerpage components
import Page from "./Page";
import SecondaryBannerpage from "./SecondaryBannerpage";
import FeatureGrid from "./FeatureGrid";
import CredentialCard from "./CredentialCard";
import LinkView from "./LinkView";
import Button from ".//Button";


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

export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}