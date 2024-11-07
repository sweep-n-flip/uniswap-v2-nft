import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BytesColumn as BytesColumn_, ManyToOne as ManyToOne_, Index as Index_, StringColumn as StringColumn_, BigDecimalColumn as BigDecimalColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {Pair} from "./pair.model"

@Entity_()
export class Swap {
    constructor(props?: Partial<Swap>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BytesColumn_({nullable: false})
    txId!: Uint8Array

    @BytesColumn_({nullable: false})
    origin!: Uint8Array

    @Index_()
    @ManyToOne_(() => Pair, {nullable: true})
    pair!: Pair

    @StringColumn_({nullable: false})
    type!: string

    @BigDecimalColumn_({nullable: false})
    volume0!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    volume1!: BigDecimal

    @Index_()
    @IntColumn_({nullable: false})
    timestamp!: number
}
