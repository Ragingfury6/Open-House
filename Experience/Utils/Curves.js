import { CatmullRomCurve3, Vector3 } from 'three';
export default class Curves {
  static CenterToCoding = new CatmullRomCurve3([
    new Vector3(0, 10, 20),
    new Vector3(-2, 2, 5),
    new Vector3(-5.52, 0.59, 0.77),
    new Vector3(-5.47, 0.59, -0.39),
    new Vector3(-5.04, 0.59, -0.46),
    new Vector3(-5.04, 0.59, -0.75),
    new Vector3(-5.47, 0.59, -0.72),
  ]);
  static CodingToCenter = new CatmullRomCurve3([
    new Vector3(-5.7, 0.7, 2),
    new Vector3(-4.38, 1.52, 2.76),
    new Vector3(0, 10, 20),
  ]);
  static CenterToCodingLook = new CatmullRomCurve3([
    new Vector3(0, 0, 0),
    new Vector3(-5.5, 0.2, 0),
  ]);
  static CodingToCenterLook = new CatmullRomCurve3([
    new Vector3(-5.5, 0.2, 0),
    new Vector3(0, 0, 0),
  ]);
  static CenterToVet = new CatmullRomCurve3([
    new Vector3(0, 10, 20),
    new Vector3(1.52, 1.04, 2.76),
    new Vector3(4.5, 1.04, 1.04),
  ]);
  static VetToCenter = new CatmullRomCurve3([
    new Vector3(4.5, 1.04, 1.04),
    new Vector3(1.52, 1.04, 2.76),
    new Vector3(0, 10, 20),
  ]);
  static CenterToVetLook = new CatmullRomCurve3([
    new Vector3(0, 0, 0),
    new Vector3(6, 0.2, 1.75),
  ]);
  static VetToCenterLook = new CatmullRomCurve3([
    new Vector3(6, 0.2, 1.75),
    new Vector3(0, 0, 0),
  ]);
}
