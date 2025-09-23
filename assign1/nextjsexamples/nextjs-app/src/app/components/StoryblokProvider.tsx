"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// 1. Import your Page and SecondaryBannerpage components
import Page from "./Page";
import SecondaryBannerpage from "./SecondaryBannerpage";
import Button from "./Button";
import FeatureGrid from "./FeatureGrid";
import CredentialCard from "./CredentialCard";


storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    secondary_bannerpage: SecondaryBannerpage,
    button: Button,
    credential_card:CredentialCard,
    feature_grid:FeatureGrid
  },
});

export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}