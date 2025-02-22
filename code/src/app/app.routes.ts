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

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'privacy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'contact',
        component: ContactMeComponent
    },
    {
        path: 'faq',
        component: FrequentlyAskedQuestionsComponent
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
