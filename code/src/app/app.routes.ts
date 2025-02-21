import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions/frequently-asked-questions.component';
import { ItunesComponent } from './itunes/itunes.component';
import { DetailForIdComponent } from './itunes/detail-for-id/detail-for-id.component';

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
        path: 'itunes',
        children: [
            {
                path: '',
                component: ItunesComponent
            },
            {
                path: ':id',
                component: DetailForIdComponent
            }
        ]
    }
];
