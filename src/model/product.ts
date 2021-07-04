export type Data = {
    account_id: null,
    active_flg: number,
    active_ingredient: string,
    company_code: string,
    company_name: string,
    created_date: string
    direction_for_use: string
    dosage: string
    drg_barcode: string
    drg_drug_cd: string
    drg_drug_name: string
    drg_store_id: number
    drug_id: number
    drug_unit_id: number
    employee_commissions: number
    exp_date: string
    image_url: string
    inv_id: string
    lot: string
    loyalty_flg: number
    mfg_date: string
    package_desc: string
    price: number
    quantity: number
    unit_cd: string
    unit_name: string
    updated_date: null
    updated_user: string
    vat_percent: number
    
    unit: Unit[]
}
type Unit = {
    default_flg: number
    drug_id: number
    drug_unit_id: number
    price: number
    price_before_vat: number
    unit_id: number
    unit_name: string
    unit_qty: number
}