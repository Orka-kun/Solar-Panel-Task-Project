<div>
    <div class="container mx-auto p-4">
        @if (session()->has('message'))
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {{ session('message') }}
            </div>
        @endif
        <button wire:click="create" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add New</button>

        <table class="min-w-full bg-white border">
            <thead>
                <tr>
                    <th class="border px-4 py-2">ID</th>
                    <th class="border px-4 py-2">Quantity</th>
                    <th class="border px-4 py-2">Amount</th>
                    <th class="border px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($solarPanels as $panel)
                    <tr>
                        <td class="border px-4 py-2">{{ $panel->id }}</td>
                        <td class="border px-4 py-2">{{ $panel->quantity }}</td>
                        <td class="border px-4 py-2">{{ $panel->amount }}</td>
                        <td class="border px-4 py-2">
                            <button wire:click="edit({{ $panel->id }})" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                            <button wire:click="delete({{ $panel->id }})" class="bg-red-500 text-white px-2 py-1 rounded" onclick="return confirm('Are you sure?')">Delete</button>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        {{ $solarPanels->links() }}

        @if ($isOpen)
            <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                <div class="bg-white p-6 rounded shadow-lg w-1/3">
                    <h2 class="text-xl font-bold mb-4">{{ $solarPanelId ? 'Edit Solar Panel' : 'Add Solar Panel' }}</h2>
                    <form wire:submit.prevent="{{ $solarPanelId ? 'update' : 'store' }}">
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700">Quantity</label>
                            <input wire:model="quantity" type="number" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
                            @error('quantity') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700">Amount</label>
                            <input wire:model="amount" type="number" step="0.01" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
                            @error('amount') <span class="text-red-500 text-sm">{{ $message }}</span> @enderror
                        </div>
                        <div class="flex justify-end">
                            <button type="button" wire:click="closeModal" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">{{ $solarPanelId ? 'Update' : 'Save' }}</button>
                        </div>
                    </form>
                </div>
            </div>
        @endif
    </div>
</div>
