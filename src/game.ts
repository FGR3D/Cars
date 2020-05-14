import { CarItalianEdition } from '../metas/caritalianedition/caritalianedition'


const caritalianeditionLandOwnerData = {
  metadata: `
  {
    "meta": {
      "position": {"x":8, "y":0, "z":8},
      "rotation": {"x":0, "y":0, "z":0},
      "scale": {"x":1, "y":1, "z":1}
    }
  }`
}

/// --- Set up your meta system to test ---
engine.addSystem(new CarItalianEdition(null, caritalianeditionLandOwnerData))
