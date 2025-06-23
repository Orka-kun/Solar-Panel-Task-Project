<?php

namespace App\Http\Livewire\Admin;

use Livewire\Component;
use App\Models\SolarPanel;
use Livewire\WithPagination;

class SolarPanelsIndex extends Component
{
    use WithPagination;

    public $quantity, $amount, $solarPanelId;
    public $isOpen = false;

    protected $rules = [
        'quantity' => 'required|integer|min:1',
        'amount' => 'required|numeric|min:0',
    ];

    public function render()
    {
        $solarPanels = SolarPanel::paginate(10);
        return view('livewire.admin.solar-panels-index', compact('solarPanels'));
    }

    public function create()
    {
        $this->resetInputFields();
        $this->openModal();
    }

    public function openModal()
    {
        $this->isOpen = true;
    }

    public function closeModal()
    {
        $this->isOpen = false;
    }

    private function resetInputFields()
    {
        $this->quantity = '';
        $this->amount = '';
        $this->solarPanelId = null;
    }

    public function store()
    {
        $this->validate();

        SolarPanel::create([
            'quantity' => $this->quantity,
            'amount' => $this->amount,
        ]);

        session()->flash('message', 'Solar panel created successfully.');
        $this->closeModal();
        $this->resetInputFields();
    }

    public function edit($id)
    {
        $solarPanel = SolarPanel::findOrFail($id);
        $this->solarPanelId = $id;
        $this->quantity = $solarPanel->quantity;
        $this->amount = $solarPanel->amount;
        $this->openModal();
    }

    public function update()
    {
        $this->validate();

        $solarPanel = SolarPanel::findOrFail($this->solarPanelId);
        $solarPanel->update([
            'quantity' => $this->quantity,
            'amount' => $this->amount,
        ]);

        session()->flash('message', 'Solar panel updated successfully.');
        $this->closeModal();
        $this->resetInputFields();
    }

    public function delete($id)
    {
        SolarPanel::find($id)->delete();
        session()->flash('message', 'Solar panel deleted successfully.');
    }
}
