import { CONFIG } from './config'

export const VALIDGUESSES = [
  'corps',
  'tetes',
  'joues',
  'coude',
  'mains',
  'doigt',
  'pouce',
  'jambe',
  'genou',
  'pieds',
  'coeur',
  'dents',
  'gorge',
  'avale',
  'avoir',
  'bleus',
  'rhume',
  'vomir',
  'vieux',
  'brule',
  'foule',
  'coule',
  'sirop',
  'beans'
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
