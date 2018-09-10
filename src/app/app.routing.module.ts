import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TrainingComponent } from "./auth/training/training.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";


const ROUTES:Routes = [
    {path : '' , component:LoginComponent , pathMatch:'full'},
    {path : 'signup' , component:SignupComponent},
    {path : 'training' , component:TrainingComponent , canActivate:[AuthGuard]},
    {path : 'login' , component:LoginComponent},
    {path : 'welcome' , component:WelcomeComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(ROUTES)],
    exports:[RouterModule],
    providers:[AuthGuard]
})

export class AppRoutingModule {

}