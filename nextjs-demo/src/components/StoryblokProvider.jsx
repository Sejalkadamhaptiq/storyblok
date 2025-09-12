"use client"


import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import {Tour} from './Tour';
import { Page } from "./Page";
import {Hero} from "./Hero";
import { Grid } from "./Grid";
import { Feature } from "./Feature";
import { Testimonial } from "./Testimonial";
import { RecommendedTours } from "./RecommendedTours";
import { RecommendedTour } from "./RecommendedTour";


storyblokInit({
   accessToken:process.env.STORYBLOK_TOKEN,
    components:{
       tour:Tour,
       page:Page,
       hero:Hero,
       grid:Grid,
       feature:Feature,
       testimonial:Testimonial,
       recommended_tours:RecommendedTours,
      recommended_tour:RecommendedTour,

    },
    use:[apiPlugin],
     enableFallbackComponent:true,
})

export const StoryblokProvider = ({children})=>{
    return <>{children}</>

};