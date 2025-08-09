import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions/frequently-asked-questions.component';
import { ItunesComponent } from './itunes/itunes.component';
import { PodcastByIdResolver, PodcastWithEpisodesByIdResolver } from './podcast-by-id-resolver';
import { DetailForIdComponent } from './itunes/details/detail-for-id.component';
import { PlayerComponent } from './player/player.component';
import { EpisodeComponent } from './itunes/episode/episode.component';
import { AboutComponent } from './about/about.component';
import { ScreenshotCarouselComponent } from './screenshot-carousel/screenshot-carousel.component';
import { HelpComponent } from './help/help.component';
import { NewHomeComponent } from './new-home/new-home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'new-home',
        component: NewHomeComponent
    },
    {
        path: 'screenshots',
        component: ScreenshotCarouselComponent,
    },
    {
        path: 'privacy',
        component: PrivacyPolicyComponent
    },
    {   
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactMeComponent
    },
    {
        path: 'help',
        children: [
            { path: '', component: HelpComponent },
            { path: ':shortName', component: HelpComponent }
        ]
    },
    {
        path: 'player',
        component: PlayerComponent
    },
    {
        path: 'episode/:id',
        resolve: { 
            item: PodcastWithEpisodesByIdResolver
        },
        component: EpisodeComponent
    },
    {
        path: 'episode/:id/:track',
        resolve: { 
            item: PodcastWithEpisodesByIdResolver
        },
        component: EpisodeComponent
    },
    {
        path: 'itunes',
        children: [
            {
                path: '',
                component: ItunesComponent
            },
            {
                path: ':id',
                resolve: { 
                    item: PodcastByIdResolver
                },
                component: DetailForIdComponent
            }
        ]
    }
];
