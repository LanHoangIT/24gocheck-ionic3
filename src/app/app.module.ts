import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AccountsPage } from '../pages/accounts/accounts';
import { FeedbackPage } from '../pages/accounts/feedback/feedback';
import { ProfilesPage } from '../pages/accounts/profiles/profiles';
import { RegisterPage } from '../pages/accounts/register/register';
import { CategoriesPage } from '../pages/categories/categories';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { ShopsProvider } from '../providers/shops/shops';
import { TestProvider } from '../providers/test/test';
import { FrontSliderComponent } from './../components/front-slider/front-slider';
import { FavoritesPage } from './../pages/accounts/favorites/favorites';
import { LoginPage } from './../pages/accounts/login/login';
import { CategoryPage } from './../pages/categories/category/category';
import { ProductListPage } from './../pages/products/product-list/product-list';
import { ProductPage } from './../pages/products/product/product';
import { ProductsPage } from './../pages/products/products';
import { ShopListPage } from './../pages/shops/shop-list/shop-list';
import { ShopPage } from './../pages/shops/shop/shop';
import { ShopsPage } from './../pages/shops/shops';
import { TabsPage } from './../pages/tabs/tabs';
import { MyApp } from './app.component';
import { ProductsProvider } from '../providers/products/products';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductListPage,
    ProductPage,
    ShopsPage,
    ShopPage,
    ShopListPage,
    AccountsPage,
    FavoritesPage,
    FeedbackPage,
    LoginPage,
    RegisterPage,
    ProfilesPage,
    CategoriesPage,
    CategoryPage,
    SearchPage,
    FrontSliderComponent,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductsPage,
    ProductListPage,
    ProductPage,
    ShopsPage,
    ShopPage,
    ShopListPage,
    AccountsPage,
    FavoritesPage,
    FeedbackPage,
    LoginPage,
    RegisterPage,
    ProfilesPage,
    CategoriesPage,
    CategoryPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestProvider,
    ShopsProvider,
    ProductsProvider
  ]
})
export class AppModule {}
