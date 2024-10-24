import {BigDecimal} from "@subsquid/big-decimal"
import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, BooleanColumn as BooleanColumn_, BigDecimalColumn as BigDecimalColumn_} from "@subsquid/typeorm-store"
import {Currency} from "./currency.model"

@Entity_()
export class Pair {
    constructor(props?: Partial<Pair>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Currency, {nullable: true})
    token0!: Currency

    @Index_()
    @ManyToOne_(() => Currency, {nullable: true})
    token1!: Currency

    @BooleanColumn_({nullable: false})
    discrete0!: boolean

    @BooleanColumn_({nullable: false})
    discrete1!: boolean

    @BigDecimalColumn_({nullable: false})
    reserve0!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    reserve1!: BigDecimal

    @BigDecimalColumn_({nullable: false})
    totalSupply!: BigDecimal
}
