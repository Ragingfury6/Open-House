import { CatmullRomCurve3, Vector3 } from 'three';
export default class Curves {
  static CenterToCoding = new CatmullRomCurve3([
    new Vector3(0, 8, 13.78),
    new Vector3(-5.85, 0.6, 1.5),
    new Vector3(-5.67, 0.6, -0.24),
    new Vector3(-5.43, 0.6, -0.33),
    new Vector3(-5.43, 0.6, -0.5),
    new Vector3(-5.69, 0.55, -0.5),
  ]);
  static CodingToCenter = new CatmullRomCurve3([
    new Vector3(-5.69, 0.55, -0.5),
    new Vector3(-5.43, 0.6, -0.5),
    new Vector3(-5.43, 0.6, -0.33),
    new Vector3(-5.67, 0.6, -0.24),
    new Vector3(-5.85, 0.6, 1.5),
    new Vector3(0, 8, 13.78),
  ]);

  static CenterToHVAC = new CatmullRomCurve3([
    new Vector3(0, 8, 13.78),
    new Vector3(-7.09, 0.21, -0.03),
    new Vector3(-6.57, 0.21, -0.62),
    new Vector3(-6.52, 0.21, -0.88),
    new Vector3(-5.63, 0.21, -0.87),
    new Vector3(-5.43, 0.21, -0.75),
    new Vector3(-3.14, 0.21, -0.65),
    new Vector3(-3.13, 0.21, -0.96),
  ]);
  static HVACToCenter = new CatmullRomCurve3([
    new Vector3(-3.13, 0.21, -0.96),
    new Vector3(-3.14, 0.21, -0.65),
    new Vector3(-5.43, 0.21, -0.75),
    new Vector3(-5.63, 0.21, -0.87),
    new Vector3(-6.52, 0.21, -0.88),
    new Vector3(-6.57, 0.21, -0.62),
    new Vector3(-7.09, 0.21, -0.03),
    new Vector3(0, 8, 13.78),
  ]);
  static CenterToAuto = new CatmullRomCurve3([
    new Vector3(0, 8, 13.78),
    new Vector3(-0.29, 0.63, 1.73),
    new Vector3(4.7, 0.21, 1.32),
    new Vector3(4.6, 0.21, 0.85),
  ]);
  static AutoToCenter = new CatmullRomCurve3([
    new Vector3(4.6, 0.21, 0.85),
    new Vector3(4.7, 0.21, 1.32),
    new Vector3(-0.29, 0.63, 1.73),
    new Vector3(0, 8, 13.78),
  ]);
  static CenterToAutoCollision = new CatmullRomCurve3([
    new Vector3(0, 8, 13.78),
    new Vector3(-0.41, 0.33, 1.43),
    new Vector3(0.33, 0.21, 0.45),
    new Vector3(0.62, 0.21, -1.46),
    new Vector3(5.1, 0.21, -1.56),
    new Vector3(5.15, 0.21, -1.95),
  ]);
  static AutoCollisionToCenter = new CatmullRomCurve3([
    new Vector3(5.15, 0.21, -1.95),
    new Vector3(5.1, 0.21, -1.56),
    new Vector3(0.62, 0.21, -1.46),
    new Vector3(0.33, 0.21, 0.45),
    new Vector3(-0.41, 0.33, 1.43),
    new Vector3(0, 8, 13.78),
  ]);
  static CenterToVet = new CatmullRomCurve3([
    new Vector3(0, 8, 13.78),
    new Vector3(-0.41, 0.83, 1.61),
    new Vector3(5.7, 0.33, 1.83),
  ]);
  static VetToCenter = new CatmullRomCurve3([
    new Vector3(5.7, 0.33, 1.83),
    new Vector3(-0.41, 0.83, 1.61),
    new Vector3(0, 8, 13.78),
  ]);
}
