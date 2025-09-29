'use client'
import { useState } from 'react'
import { Calculator } from 'lucide-react'

export default function PriceCalculator() {
  const [distance, setDistance] = useState(10)
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day')
  const [vehicleType, setVehicleType] = useState<'car' | 'van'>('car')

  const calculatePrice = () => {
    const basePrice = vehicleType === 'car' ? 2500 : 3500
    const kmPrice = distance > 10 ? (distance - 10) * 150 : 0
    const nightSurcharge = timeOfDay === 'night' ? 0.3 : 0

    return Math.round((basePrice + kmPrice) * (1 + nightSurcharge))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="flex items-center mb-6 text-black">
          <Calculator className="w-8 h-8 text-primary-600 mr-3" />
          <h2 className="text-2xl font-bold">Kalkulator Cena</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-black">
          <div>
            <label className="block text-sm font-semibold text-black-700 mb-2">
              Udaljenost (km)
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={distance}
              onChange={(e) => setDistance(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-center mt-2 text-lg font-semibold text-primary-600">
              {distance} km
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Vreme
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="day"
                  checked={timeOfDay === 'day'}
                  onChange={(e) => setTimeOfDay(e.target.value as 'day')}
                  className="mr-2"
                />
                Dnevno (06:00 - 22:00)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="night"
                  checked={timeOfDay === 'night'}
                  onChange={(e) => setTimeOfDay(e.target.value as 'night')}
                  className="mr-2"
                />
                Noćno (+30%)
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tip vozila
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="car"
                  checked={vehicleType === 'car'}
                  onChange={(e) => setVehicleType(e.target.value as 'car')}
                  className="mr-2"
                />
                Automobil
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="van"
                  checked={vehicleType === 'van'}
                  onChange={(e) => setVehicleType(e.target.value as 'van')}
                  className="mr-2"
                />
                Kombi/Van
              </label>
            </div>
          </div>
        </div>

        <div className="text-center bg-primary-50 rounded-xl p-6">
          <div className="text-3xl font-bold text-primary-800 mb-2">
            {calculatePrice().toLocaleString()} RSD
          </div>
          <div className="text-gray-600">Procenjena cena</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Osnovna cena</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Putničko vozilo</span>
              <span className="font-semibold">2.500 RSD</span>
            </div>
            <div className="flex justify-between">
              <span>Kombi/Van</span>
              <span className="font-semibold">3.500 RSD</span>
            </div>
            <div className="flex justify-between">
              <span>Dodatni km (preko 10km)</span>
              <span className="font-semibold">150 RSD/km</span>
            </div>
            <div className="flex justify-between">
              <span>Noćni rad (22:00-06:00)</span>
              <span className="font-semibold">+30%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Dodatne usluge</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Startovanje vozila</span>
              <span className="font-semibold">1.500 RSD</span>
            </div>
            <div className="flex justify-between">
              <span>Zamena gume</span>
              <span className="font-semibold">2.000 RSD</span>
            </div>
            <div className="flex justify-between">
              <span>Dovoz goriva</span>
              <span className="font-semibold">1.000 RSD</span>
            </div>
            <div className="flex justify-between">
              <span>Čekanje (po satu)</span>
              <span className="font-semibold">1.000 RSD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}