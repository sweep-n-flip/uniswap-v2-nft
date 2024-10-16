import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, IntColumn as IntColumn_, BigDecimalColumn as BigDecimalColumn_} from "@subsquid/typeorm-store"
import {Pair} from "./pair.model"

@Entity_()
export class PairMonth {
    constructor(props?: Partial<PairMonth>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Pair, {nullable: true})
    pair!: Pair

    @IntColumn_({nullable: false})
    month!: number

    @BigDecimalColumn_({nullable: false})
    volume0!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    volume1!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    reserve0!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    reserve1!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    totalSupply!: BigDecimal
}
