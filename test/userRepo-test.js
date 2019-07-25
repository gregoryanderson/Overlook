
    
import RoomServiceRepo from '../src/RoomServiceRepo'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { roomServices } from '../data'
const expect = chai.expect;
chai.use(spies)