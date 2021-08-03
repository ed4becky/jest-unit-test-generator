import { ParsedClassDependency, ClassOptions, DependencyHandler, DependencyHandlerOptions } from './model';
import { getUsedMethods } from './helpers';

export default {
  run: function (result: ClassOptions, dep: ParsedClassDependency, options: DependencyHandlerOptions) {
    const usedMethods = getUsedMethods(options.sourceCode, dep.name);

    let type: string;

    if (dep.isObj) {
      type = `${dep.type || 'any'}`;
    } else {
      type = `jest.Mocked<${dep.type || 'any'}>`;
    }
    result.declarations.push({
      name: options.variableName,
      type: type
    });

    let initializer: {name: string, value: string};

    if (dep.isObj) {
      initializer = {name: options.variableName, value: `{} as ${dep.type || 'any'}`};
    } else {
      const argType = dep.type ? dep.type.replace(/<.*>/g, '').replace(/Type$/, "") : void 0;
      initializer = {
        name: options.variableName,
        value: `createSpyObj<${dep.type || 'any'}>(${(dep.type === 'any' || !dep.type) ? dep.name: argType}, [${usedMethods.map(m => (options.quoteSymbol + m + options.quoteSymbol)).join(", ")}])`
      };
    }
    result.initializers.push(initializer);

    result.dependencies.push({
      name: options.variableName,
      token: options.injectionToken || 'no-token',
      isObj: dep.isObj
    });
    result.methods = options.methods;
  },

  test(_dep: ParsedClassDependency) {
    return true;
  }
} as DependencyHandler;
