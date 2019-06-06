import  { routes} from './app.routes';
import { UsersComponent } from './Integration Tests/users/users.component';

describe('routes', () => {
    it('should contain a route for /users', () => {
        expect(routes).toContain({path: 'users', component: UsersComponent});
    });
});