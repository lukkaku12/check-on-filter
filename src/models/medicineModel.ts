import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
    tableName:'medicine',
    timestamps:false
})
export class Medicine extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    medicine_name!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    quantity!:string;

    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    expiration_date!:string;
    
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    price!:number;
}