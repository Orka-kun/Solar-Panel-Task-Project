<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;
use App\Models\SolarPanel;

class PaymentController extends Controller
{
    public function __construct()
    {
        Stripe::setApiKey(config('services.stripe.secret'));
    }

    public function placeOrder(Request $request)
    {
        $validated = $request->validate([
            'quantity' => 'required|integer|min:1',
            'amount' => 'required|numeric|min:0',
            'stripeToken' => 'required',
        ]);

        try {
            $charge = Charge::create([
                'amount' => $validated['amount'] * 100, // Convert to cents
                'currency' => 'usd',
                'source' => $validated['stripeToken'],
                'description' => 'Solar Panel Donation - Quantity: ' . $validated['quantity'],
            ]);

            SolarPanel::create([
                'quantity' => $validated['quantity'],
                'amount' => $validated['amount'],
            ]);

            return response()->json(['success' => true, 'message' => 'Payment and donation successful!']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Payment failed: ' . $e->getMessage()], 400);
        }
    }
}
