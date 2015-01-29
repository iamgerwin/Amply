<?php



Route::get('/', function()
{
    return View::make('login.login');
});

/**
 * API ROUTES
 */
Route::group(['prefix' => 'api'],function()
{

});