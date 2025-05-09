'use client'

import {
  Wrench,
  Truck,
  Tractor,
  Filter,
  Car,
  Settings,
} from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Engine Overhaul',
      description:
        'Comprehensive engine repairs, reconditioning, and diagnostics for tractors, forklifts, and vehicles.',
      icon: Wrench,
    },
    {
      title: 'Forklift Hire & Maintenance',
      description:
        'Reliable forklift rental and full maintenance contracts to ensure your operations stay on track.',
      icon: Truck,
    },
    {
      title: 'Earth Moving Repairs & Parts',
      description:
        'Repair and supply of parts for Caterpillar, Komatsu, Hitachi and more — fast turnaround guaranteed.',
      icon: Settings,
    },
    {
      title: 'Vehicle Parts & Filters',
      description:
        'Wide inventory of high-quality vehicle parts, filters, and industrial components for all brands.',
      icon: Filter,
    },
    {
      title: 'Agricultural Equipment',
      description:
        'Sales, repairs, and servicing of tractors, ploughs, planters, and irrigation tools.',
      icon: Tractor,
    },
    {
      title: 'Car Hire & Logistics',
      description:
        'Affordable logistics solutions and car hire (1-ton van, saloon car) for your transport needs.',
      icon: Car,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition flex flex-col items-center text-center"
          >
            <Icon className="text-red-600 w-12 h-12 mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
