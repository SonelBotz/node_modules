import { factory } from '../../utils/factory.js';
import { deepMap } from '../../utils/collection.js';
var name = 'tan';
var dependencies = ['typed'];
export var createTan = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;

  /**
   * Calculate the tangent of a value. `tan(x)` is equal to `sin(x) / cos(x)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.tan(x)
   *
   * Examples:
   *
   *    math.tan(0.5)                    // returns number 0.5463024898437905
   *    math.sin(0.5) / math.cos(0.5)    // returns number 0.5463024898437905
   *    math.tan(math.pi / 4)            // returns number 1
   *    math.tan(math.unit(45, 'deg'))   // returns number 1
   *
   * See also:
   *
   *    atan, sin, cos
   *
   * @param {number | BigNumber | Complex | Unit | Array | Matrix} x  Function input
   * @return {number | BigNumber | Complex | Array | Matrix} Tangent of x
   */
  return typed(name, {
    number: Math.tan,
    Complex: function Complex(x) {
      return x.tan();
    },
    BigNumber: function BigNumber(x) {
      return x.tan();
    },
    Unit: function Unit(x) {
      if (!x.hasBase(x.constructor.BASE_UNITS.ANGLE)) {
        throw new TypeError('Unit in function tan is no angle');
      }

      return this(x.value);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since tan(0) = 0
      return deepMap(x, this, true);
    }
  });
});