<?php

    use Illuminate\Support\Facades\Broadcast;

    // Example channel definition (optional)
    Broadcast::channel('public-channel', function ($user) {
        return true;
    });
