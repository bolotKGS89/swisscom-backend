import { TOGGLE_REPOSITORY } from './core/database/constants';
import { Toggle } from './toggle.entity';

export const toggleProviders = [{
    provide: TOGGLE_REPOSITORY,
    useValue: Toggle,
}];