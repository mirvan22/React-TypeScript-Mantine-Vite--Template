export POSITION=$PWD

read -p "View Name : " name

GenerateView(){
    lowercase=$(echo $name | tr '[:upper:]' '[:lower:]')
    clear
    PS3='Mohon pilih salah satu dari pilihan berikut : '
    options=("Generate View" "Generate View,MenuItems" "Generate View,MenuItems,Router" "Quit")
    select opt in "${options[@]}"
    do
        case $opt in
            "Generate View" )
                clear
                cd src/Views && touch $name.tsx
                printf "$TEMPLATE" > $name.tsx
                echo -e "Generate View ${Red}Gagal\b\b\b\b\b${CReset}Berjalan Dengan Baik ........\n" | pv -qL $[15+(-2 + RANDOM%5)]
                break
            ;;
            "Generate View,MenuItems")
                clear
                cd src/Views && touch $name.tsx
                printf "$TEMPLATE" > $name.tsx
                cd $POSITION
                sed -i "s+//Seed Dont Delete This Comment+{ key: '$lowercase', label: '$name', icon: Icon.Hero.User, path: '/$lowercase' },\n//Seed Dont Delete This Comment+" src/Layout/MenuItems.tsx
                echo -e "${BYellow} Generate View,MenuItems Berjalan Dengan Baik...\n"
                break
            ;;
            "Generate View,MenuItems,Router")
                clear
                cd src/Views && touch $name.tsx
                printf "$TEMPLATE" > $name.tsx
                cd $POSITION
                
                sed -i "s+//Seed Dont Delete This Comment+{ key: '$lowercase', label: '$name', icon: Icon.Hero.User, path: '/$lowercase' },\n//Seed Dont Delete This Comment+" src/Layout/MenuItems.tsx
                
                sed -i "s+//Seed Component Router Dont Delete This Comment+const Order = Loadable(lazy(() => import('../Views/$name'))),\n///Seed Component Router Dont Delete This Comment+" src/Router/MainRoutes.tsx
                
                sed -i "s+//Seed Path Router Dont Delete This Comment+    { path: '/$lowercase', element: <$name /> },
                //Seed Path Router Dont Delete This Comment+" src/Router/MainRoutes.tsx
                
                echo -e "${BYellow} Generate View,MenuItems,Router Berjalan Dengan Baik...\n"
                
                echo -e "Generate View,MenuItems,Router Gagal\b\b\b\b\bBerjalan Dengan Baik\n" | pv -qL $[20+(-2 + RANDOM%5)]
                break
            ;;
            "Quit")
                clear
                break
            ;;
            *) echo -e "${Red}  Kata ${BRed} '$REPLY' ${Red}Tidak Sesuai Dengan Pilihan...${CReset}";;
        esac
    done
    
}

# Normal Colors
Black='\e[0;30m'
Red='\e[0;31m'
Green='\e[0;32m'
Yellow='\e[0;33m'
Blue='\e[0;34m'
Purple='\e[0;35m'
Cyan='\e[0;36m'
White='\e[0;37m'

# Bold
BBlack='\e[1;30m'
BRed='\e[1;31m'
BGreen='\e[1;32m'
BYellow='\e[1;33m'
BBlue='\e[1;34m'
BPurple='\e[1;35m'
BCyan='\e[1;36m'
BWhite='\e[1;37m'

# Background
On_Black='\e[40m'
On_Red='\e[41m'
On_Green='\e[42m'
On_Yellow='\e[43m'
On_Blue='\e[44m'
On_Purple='\e[45m'
On_Cyan='\e[46m'
On_White='\e[47m'

CReset='\033[0m'
export TEMPLATE="import { FunctionComponent, useState } from 'react'
import { Icon } from '../Utils/Icon'
import { TableOutletTemplate } from '../Template/TableOutletTemplate'
import { Loader, ScrollArea } from '@mantine/core'
import { AppTable } from '../Component/AppTable'
import { GridTemplate, IGridElements } from '../Template/GridTemplate'
import { __catEmptyLottie } from '../Assets/Lottie/CatEmptyLottie'
import { elements } from '../TestData'

interface IElements {
    TableElement: () => AppTable.ITableRoot[]
    GridElement: () => IGridElements[]
}
const $name = () => {
    const Elements: IElements = {
        /** Table */
        TableElement() {
            return [
                {
                    key: '$name',
                    TableHeadRow: [
                        {
                            className: ' break--mantine--table--stickyHeader ',
                            TableHeader: [
                                {
                                    label: 'No',
                                },
                                {
                                    label: 'Name',
                                },
                                {
                                    label: 'Position',
                                },
                                {
                                    label: 'Mass',
                                },
                                {
                                    label: 'Symbol',
                                },
                            ],
                        },
                    ],
                    TableBodyRow: !data
                    ? [
                        {
                            TableColumn: [
                                {
                                    label: <Loader size='xl' variant='bars' m={20} />,
                                    colSpan: 99,
                                    align: 'center',
                                },
                            ],
                        },
                    ]
                    : !data.length
                    ? [
                        {
                            TableColumn: [
                                {
                                    label: __catEmptyLottie,
                                    colSpan: 99,
                                },
                            ],
                        },
                    ]
                    : elements.map((row, key) => ({
                                TableColumn: [
                                    {
                                        label: key + 1,
                                    },
                                    {
                                        label: row.name,
                                    },
                                    {
                                        label: row.position,
                                    },
                                    {
                                        label: row.mass,
                                    },
                                    {
                                        label: row.symbol,
                                    },
                                ],
                                selected() {
                                    setSelected(row)
                                },
                    })),
                },
            ]
        },
        
        /** Crud Action */
        GridElement() {
            return [
                {
                    sx: { padding: 10 },
                    GridCol: [
                        {
                            colspan: 'content',
                            AppButton: [
                                {
                                    label: 'Tambah',
                                    icon: Icon.Button.Plus,
                                    disabled: !selected,
                                    // CrudActionOpenModal: <DashboardDialog selected={selected} />,
                                },
                            ],
                        },
                    ],
                },
            ]
        },
    }
    
    const [selected, setSelected] = useState<any | null>(null)
    const data: any = [{}]
    return (
        <TableOutletTemplate label='Dashboard' icon={Icon.Hero.User}>
        <GridTemplate GridRoot={Elements.GridElement()} />
        <ScrollArea.Autosize maxHeight='calc(100vh - 320px)'>
        <AppTable TableRoot={Elements.TableElement()} />
        </ScrollArea.Autosize>
        </TableOutletTemplate>
    )
}

export default $name as FunctionComponent
"

GenerateView
