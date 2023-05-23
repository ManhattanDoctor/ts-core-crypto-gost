import * as _ from 'lodash';
import { ITransportCommand, TransportCryptoManager, ISignature } from '@ts-core/common';
import { GostR3410 } from '../GostR3410';

export class TransportCryptoManagerGostR3410 extends TransportCryptoManager {
    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static ALGORITHM = 'GostR3410';

    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------

    public async sign<U>(command: ITransportCommand<U>, nonce: string, privateKey: string): Promise<string> {
        return GostR3410.sign(this.toString(command, nonce), privateKey);
    }

    public async verify<U>(command: ITransportCommand<U>, signature: ISignature): Promise<boolean> {
        return GostR3410.verify(this.toString(command, signature.nonce), signature.value, signature.publicKey);
    }

    // --------------------------------------------------------------------------
    //
    //  Public Properties
    //
    // --------------------------------------------------------------------------

    public get algorithm(): string {
        return TransportCryptoManagerGostR3410.ALGORITHM;
    }
}
