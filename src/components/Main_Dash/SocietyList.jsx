export default function SocietyList() {
    const societies = [
        {
            name: 'Green Valley Residency',
            address: '12th Main , Bengaluru',
            members: '128',
            dueAmount: '₹18,500',
            lastBillDate: '26 Sep 2026',
        },
        {
            name: 'Sunrise Apartments',
            address: '8th Cross, Bengaluru',
            members: '96',
            dueAmount: '₹12,200',
            lastBillDate: '14 Sep 2026',
        },
        {
            name: 'Lakeview Homes',
            address: '45th Street, Bengaluru',
            members: '142',
            dueAmount: '₹22,750',
            lastBillDate: '09 Sep 2026',
        },
        {
            name: 'Cedar Court',
            address: '3rd Block, Bengaluru',
            members: '84',
            dueAmount: '₹9,600',
            lastBillDate: '30 Aug 2026',
        },
        {
            name: 'Royal Heights',
            address: '17th Avenue, Bengaluru',
            members: '110',
            dueAmount: '₹15,900',
            lastBillDate: '19 Aug 2026',
        },
        {
            name: 'Maple Grove Society',
            address: '6th Sector, Bengaluru',
            members: '132',
            dueAmount: '₹20,300',
            lastBillDate: '05 Aug 2026',
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-center flex-wrap gap-10 w-full mt-12">
                {societies.map((society, index) => (
                    <div key={index} className="bg-(--light-blue) border border-black flex flex-col items-center w-80">
                        <div className="flex items-center justify-between w-full px-4 py-2">
                            <div className="flex items-center justify-between gap-3">
                                <p className="size-small text-gray-800">{society.name}</p>
                            </div>
                            <button type="button" aria-label="redirect">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M7 17L17 7M9.5 7H17V14.5" stroke="black" strokeOpacity=".8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-2 w-full p-4 pb-2 bg-white border-t border-black">
                            <div className="flex items-center w-full justify-between gap-2">
                                <p className="text-right text-(--grey)">{society.address}</p>
                            </div>
                            <div className="w-full h-px bg-(--grey)"></div>
                            <div className="flex items-center w-full justify-between gap-2">
                                <p>Members</p>
                                <p className="text-right text-(--grey)">{society.members}</p>
                            </div>
                            <div className="w-full h-px bg-(--grey)"></div>
                            <div className="flex items-center w-full justify-between gap-2">
                                <p>Due Amount</p>
                                <p className="text-right text-(--grey)">{society.dueAmount}</p>
                            </div>
                            <div className="w-full h-px bg-(--grey)"></div>
                            <div className="flex items-center w-full justify-between gap-2">
                                <p>Last Bill</p>
                                <p className="text-right text-(--grey)">{society.lastBillDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}