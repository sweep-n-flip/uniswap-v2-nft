import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, IntColumn as IntColumn_, BooleanColumn as BooleanColumn_, ManyToOne as ManyToOne_, Index as Index_} from "@subsquid/typeorm-store"
import {Collection} from "./collection.model"

@Entity_()
export class Currency {
    constructor(props?: Partial<Currency>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @StringColumn_({nullable: true})
    name!: string | undefined | null

    @StringColumn_({nullable: true})
    symbol!: string | undefined | null

    @IntColumn_({nullable: false})
    decimals!: number

    @BooleanColumn_({nullable: false})
    wrapping!: boolean

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection | undefined | null

    @StringColumn_({nullable: true})
    tokenIds!: string | undefined | null
}
