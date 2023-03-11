import type { FormFieldProps } from 'types';

export const patientFields: FormFieldProps[] = [
  {
    label: 'Kode AG',
    key: 'codeAg',
    type: 'select',
    options: [
      {
        label: 'EP',
        value: 'EP',
      },
      {
        label: 'LB',
        value: 'LB',
      },
      {
        label: 'DAW',
        value: 'DAW',
      },
      {
        label: 'APU',
        value: 'APU',
      },
      {
        label: 'IAS',
        value: 'IAS',
      },
      {
        label: 'MDS',
        value: 'MDS',
      },
      {
        label: 'AND',
        value: 'AND',
      },
      {
        label: 'JHP',
        value: 'JHP',
      },
    ],
  },
  {
    label: 'Sampling Comstok',
    key: 'isSamplingComstock',
    type: 'radio',
    options: [
      { label: 'ya', value: true },
      { label: 'tidak', value: false },
    ],
  },
  {
    label: 'Ruang Perawatan',
    key: 'roomName',
    type: 'select',
    options: [
      {
        label: 'CEMPAKA',
        value: 'CEMPAKA',
      },
      {
        label: 'SANDAT',
        value: 'SANDAT',
      },
      {
        label: 'KASUARI',
        value: 'KASUARI',
      },
      {
        label: 'INTENSIF (ICU)',
        value: 'INTENSIF (ICU)',
      },
      {
        label: 'INTENSIF (HCU)',
        value: 'INTENSIF (HCU)',
      },
      {
        label: 'JEPUN',
        value: 'JEPUN',
      },
      {
        label: 'POLI GIZI',
        value: 'POLI GIZI',
      },
      {
        label: 'MERAK',
        value: 'MERAK',
      },
      {
        label: 'KANKER',
        value: 'KANKER',
      },
      {
        label: 'VK',
        value: 'VK',
      },
      {
        label: 'PERINA',
        value: 'PERINA',
      },
      {
        label: 'PICU',
        value: 'PICU',
      },
      {
        label: 'NICU',
        value: 'NICU',
      },
    ],
  },
  { label: 'Tanggla Pengkajian', key: 'assessmentDate', type: 'date' },
  { label: 'Nomor Kamar / BED', key: 'roomNumber', type: 'text' },
  { label: 'Tanggal MRS', key: 'mrsDate', type: 'date' },
  { label: 'No RM', key: 'rmNumber', type: 'text' },
  { label: 'Nama Pasien', key: 'name', type: 'text' },
  { label: 'Tanggal Lahir Pasien', key: 'dob', type: 'date' },
  { label: 'Diagonis Medis', key: 'medicalDiagnose', type: 'text' },
  { label: 'Diet', key: 'diet', type: 'text' },
  {
    label: 'BB saat MRS',
    key: 'weightMrs',
    type: 'select',
    options: [
      {
        label: 'Lila/BB Estimasi',
        value: 'Lila/BB Estimasi',
      },
      {
        label: 'BB Aktual',
        value: 'BB Aktual',
      },
    ],
  },
  { label: 'Lingkar Lengan (cm)', key: 'armCircumference', type: 'number' },
  { label: 'BB Estimasi', key: 'estimatedWeight', type: 'number' },
  { label: 'Berat Badan Aktual (kg)', key: 'actualWeight', type: 'number' },
  {
    label: 'Tinggi Berat Badan Saat MRS(cm)',
    key: 'heightMrs',
    type: 'number',
  },
  {
    label: 'IMT/ % Water Low',
    key: 'imtOrWaterLow',
    type: 'select',
    options: [
      {
        label: 'IMT',
        value: 'IMT',
      },
      {
        label: 'waterLow',
        value: 'waterLow',
      },
      {
        label: 'KEK',
        value: 'KEK',
      },
      {
        label: 'tidak KEK',
        value: 'tidak KEK',
      },
    ],
  },
  { label: 'IMT', key: 'imt', type: 'number' },
  { label: 'WaterLow', key: 'waterLow', type: 'number' },
];
