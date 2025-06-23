<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SolarPanel;

class SolarPanelSeeder extends Seeder
{
    public function run()
    {
        SolarPanel::create(['quantity' => 1, 'amount' => 550.00]);
        SolarPanel::create(['quantity' => 2, 'amount' => 1100.00]);
        SolarPanel::create(['quantity' => 3, 'amount' => 1650.00]);
        SolarPanel::create(['quantity' => 4, 'amount' => 2200.00]);
        SolarPanel::create(['quantity' => 5, 'amount' => 2750.00]);
    }
}
