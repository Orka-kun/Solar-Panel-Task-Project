<?php

namespace App\Http\Controllers\Api;

use App\Models\SolarPanel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SolarController extends Controller
{
    public function index()
    {
        return SolarPanel::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'quantity' => 'required|integer',
            'amount' => 'required|numeric',
        ]);
        $solarPanel = SolarPanel::create($validated);
        return response()->json($solarPanel, 201);
    }

    public function update(Request $request, $id)
    {
        $solarPanel = SolarPanel::findOrFail($id);
        $validated = $request->validate([
            'quantity' => 'required|integer',
            'amount' => 'required|numeric',
        ]);
        $solarPanel->update($validated);
        return response()->json($solarPanel, 200);
    }

    public function destroy($id)
    {
        $solarPanel = SolarPanel::findOrFail($id);
        $solarPanel->delete();
        return response()->json(null, 204);
    }
}
