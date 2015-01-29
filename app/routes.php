<?php



Route::get('/', function()
{
    dd(Config::get('database.connections.mysql'));
});

/**
 * API ROUTES
 */
Route::group(['prefix' => 'api'],function()
{

});