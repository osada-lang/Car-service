export interface Vehicle {
  id: string;
  maker: string;
  modelName: string;
  year: number;
  grade: string;
  licensePlate: string;
  vin: string;
  inspectionDate: string;
  lastOilChangeMileage: number;
  currentMileage: number;
  baseMarketValue: number;
  imageUrl: string;
  warnings: {
    type: 'inspection' | 'oil';
    message: string;
    severity: 'high' | 'medium';
  }[];
}

export interface MaintenanceRecord {
  id: string;
  vehicleId: string;
  date: string;
  type: 'inspection' | 'oil_change' | 'repair' | 'other';
  description: string;
  mileage: number;
  cost: number;
}

export const mockVehicles: Vehicle[] = [
  {
    id: '1',
    maker: 'トヨタ',
    modelName: 'アルファード',
    year: 2021,
    grade: '2.5 S Cパッケージ',
    licensePlate: '品川 300 あ 12-34',
    vin: 'AGH30-1234567',
    inspectionDate: '2024-06-15',
    lastOilChangeMileage: 30000,
    currentMileage: 35000,
    baseMarketValue: 3850000,
    imageUrl: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=400',
    warnings: [
      { type: 'inspection', message: '車検まであと 25日', severity: 'high' },
      { type: 'oil', message: 'オイル交換推奨時期', severity: 'medium' }
    ]
  },
  {
    id: '2',
    maker: 'ダイハツ',
    modelName: 'タント',
    year: 2022,
    grade: 'カスタムRS',
    licensePlate: '世田谷 580 い 56-78',
    vin: 'LA650S-7654321',
    inspectionDate: '2025-10-20',
    lastOilChangeMileage: 5000,
    currentMileage: 8200,
    baseMarketValue: 1200000,
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400',
    warnings: []
  }
];

export const mockHistory: MaintenanceRecord[] = [
  {
    id: 'h1',
    vehicleId: '1',
    date: '2023-12-10',
    type: 'oil_change',
    description: 'エンジンオイル・エレメント交換',
    mileage: 30000,
    cost: 8500
  },
  {
    id: 'h2',
    vehicleId: '1',
    date: '2023-06-15',
    type: 'inspection',
    description: '12ヶ月法定点検',
    mileage: 25000,
    cost: 15000
  }
];
