import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BooleanColumn as BooleanColumn_, ManyToOne as ManyToOne_, Index as Index_, BigDecimalColumn as BigDecimalColumn_} from "@subsquid/typeorm-store"
import {Currency} from "./currency.model"

@Entity_()
export class Pair {
    constructor(props?: Partial<Pair>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @BooleanColumn_({nullable: false})
    discrete0!: boolean

    @BooleanColumn_({nullable: false})
    discrete1!: boolean

    @Index_()
    @ManyToOne_(() => Currency, {nullable: true})
    token0!: Currency

    @Index_()
    @ManyToOne_(() => Currency, {nullable: true})
    token1!: Currency

    @BigDecimalColumn_({nullable: false})
    reserve0!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    reserve1!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    totalSupply!: BigDecimal
}
