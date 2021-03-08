import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Toggle extends Model<Toggle> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    toggleId: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    displayName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    techincalName: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expiresOn: Date;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    isInverted: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: false,
    })
    customerIds: string[];
}