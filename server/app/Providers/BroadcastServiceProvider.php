<?php

    namespace App\Providers;

    use Illuminate\Support\Facades\Broadcast;
    use Illuminate\Support\ServiceProvider;

    class BroadcastServiceProvider extends ServiceProvider
    {
        /**
         * Bootstrap any application services.
         */
        public function boot(): void
        {
            Broadcast::routes();

            // Remove or comment out the following line if channels.php is not needed
            // require base_path('routes/channels.php');
        }
    }
