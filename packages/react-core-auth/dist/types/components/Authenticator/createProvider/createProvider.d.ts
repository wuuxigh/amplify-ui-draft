import { Platform, PrimitivesDefault } from '../context';
import { CreateProviderParams, ProviderComponent, Variant } from './types';
export declare function createProvider<T extends Platform, K extends PrimitivesDefault<T>, U extends Variant>({ platform, primitives: primitivesDefault, variant, }: CreateProviderParams<T, K, U>): ProviderComponent<K, U>;
