/**
 * Bản dịch tiếng Việt cho câu 101–165 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  101: {
    q: ['Nếu một tài nguyên Azure đã có Read-only lock, bạn có thêm được Delete lock cho tài nguyên đó không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  103: {
    q: ['ReadOnly nghĩa là người dùng có quyền được đọc tài nguyên, nhưng không xoá và không sửa được.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  104: {
    q: ['Những vai trò dựng sẵn nào có thể tạo và xoá management lock?'],
    o: ['Owner', 'Contributor', 'User Access Administrator', 'Reader'],
  },

  105: {
    q: [
      'Delete và CanNotDelete là hai loại lock đạt cùng một mục đích. Người dùng đọc và sửa được tài nguyên,',
      'nhưng không xoá được.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  106: {
    q: [
      'Geo-zone-redundant storage (GZRS) áp dụng được cho cả storage account general-purpose v1 lẫn',
      'general-purpose v2.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  107: {
    q: ['Geo-zone-redundant storage (GZRS) được những dịch vụ Azure Storage nào hỗ trợ?'],
    o: ['Azure Blob storage', 'Azure Files', 'Azure Table storage', 'Azure Queue storage'],
  },

  108: {
    q: [
      'Bạn nên xem thuộc tính nào của storage account để biết những thao tác ghi nào đã được nhân bản',
      'sang region phụ?',
    ],
    o: ['Thuộc tính Last Modified Time', 'Thuộc tính Last Sync Time', 'Thuộc tính Last Update Time'],
  },

  109: {
    q: ['Với mỗi phát biểu sau, chọn Yes nếu phát biểu đúng, ngược lại chọn No.'],
    s: [
      { p: 'Dữ liệu lưu trong một Azure Storage account luôn tự động có ít nhất ba bản sao.', o: ['Yes', 'No'] },
      { p: 'Mọi dữ liệu chép vào một Azure Storage account đều được tự động sao lưu sang một data center khác của Azure.', o: ['Yes', 'No'] },
      { p: 'Một Azure Storage account chứa được tối đa 2 TB dữ liệu và tối đa một triệu file.', o: ['Yes', 'No'] },
    ],
  },

  110: {
    q: ['Tầng truy cập nào của Azure Storage có chi phí lưu trữ cao nhất nhưng chi phí truy cập thấp nhất?'],
    o: ['Hot tier', 'Cool tier', 'Archive tier'],
  },

  111: {
    q: ['Archive tier không được hỗ trợ làm tầng truy cập mặc định của một storage account.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  115: {
    q: [
      'Bạn có một subscription Azure tên Subscription1. Bạn đăng nhập Azure portal và tạo một',
      'resource group tên RG1. Từ tài liệu Azure, bạn có câu lệnh sau để tạo một',
      'máy ảo tên VM1:',
      'az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys',
      'Bạn cần tạo VM1 trong Subscription1 bằng câu lệnh này.',
      'Giải pháp: Trên một máy chạy Windows 10, cài Azure CLI. Từ command prompt, đăng nhập',
      'Azure rồi chạy câu lệnh. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  116: {
    q: [
      'Bạn có một subscription Azure tên Subscription1. Bạn đăng nhập Azure portal và tạo một',
      'resource group tên RG1. Từ tài liệu Azure, bạn có câu lệnh sau để tạo một',
      'máy ảo tên VM1:',
      'az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys',
      'Bạn cần tạo VM1 trong Subscription1 bằng câu lệnh này.',
      'Giải pháp: Trên một máy chạy Windows 10, cài Azure CLI. Từ PowerShell, đăng nhập Azure rồi',
      'chạy câu lệnh. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  117: {
    q: [
      'Bạn có một subscription Azure tên Subscription1. Bạn đăng nhập Azure portal và tạo một',
      'resource group tên RG1. Từ tài liệu Azure, bạn có câu lệnh sau để tạo một',
      'máy ảo tên VM1:',
      'az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys',
      'Bạn cần tạo VM1 trong Subscription1 bằng câu lệnh này.',
      'Giải pháp: Từ Azure portal, mở Azure Cloud Shell và chọn Bash. Chạy câu lệnh trong Cloud',
      'Shell. Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  118: {
    q: ['Xây dựng hạ tầng data center là ví dụ của chi phí vận hành (OpEx).'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  119: {
    q: ['Lương hằng tháng cho nhân sự kỹ thuật là ví dụ của chi phí vận hành (OpEx).'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  121: {
    q: ['Bắc Mỹ chỉ được đại diện bởi một region duy nhất của Azure.'],
    s: [{ p: '', o: ['True', 'False'] }],
    e: [
      [
        'Bắc Mỹ có nhiều region của Azure, gồm West US,',
        'Central US, South Central US, East US và Canada East.',
      ],
    ],
  },

  124: {
    q: ['Dữ liệu chép vào một Azure Storage account luôn tự động được giữ ở ít nhất ba bản sao.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  125: {
    q: ['Availability zone được dùng để nhân bản dữ liệu và ứng dụng ra nhiều region.'],
    s: [{ p: '', o: ['True', 'False'] }],
    e: [['Availability Zone bảo vệ ứng dụng và dữ liệu của bạn khỏi sự cố ở mức datacenter.']],
  },

  126: {
    q: ['Với mỗi phát biểu sau, chọn Yes nếu phát biểu đúng, ngược lại chọn No.'],
    s: [
      { p: 'Availability zone triển khai được ở mọi region của Azure.', o: ['Yes', 'No'] },
      { p: 'Chỉ máy ảo chạy Windows Server mới tạo được trong availability zone.', o: ['Yes', 'No'] },
      { p: 'Availability zone được dùng để nhân bản dữ liệu và ứng dụng ra nhiều region.', o: ['Yes', 'No'] },
    ],
  },

  127: {
    q: [
      'Khi tạo Azure Storage account, bạn nên chọn tuỳ chọn hiệu năng nào cho các tình huống cần độ trễ thấp?',
    ],
    o: ['Standard', 'Premium'],
  },

  128: {
    q: [
      'Bạn có một mạng tại chỗ gồm vài máy chủ. Bạn dự định chuyển toàn bộ máy chủ lên Azure.',
      'Bạn cần khuyến nghị một giải pháp bảo đảm một số máy chủ vẫn sẵn sàng nếu một data center',
      'của Azure ngừng hoạt động trong thời gian dài. Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: ['fault tolerance', 'elasticity', 'scalability', 'low latency'],
  },

  129: {
    q: [
      'Khi lập kế hoạch chuyển một website công khai lên Azure, bạn phải tính tới việc trả chi phí sử dụng hằng tháng.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì',
      'triển khai một VPN',
      'trả tiền để chuyển toàn bộ dữ liệu website lên Azure',
      'giảm số kết nối tới website',
    ],
  },

  130: {
    q: [
      'Lập trình viên của công ty bạn dự định triển khai rất nhiều máy ảo tự dựng theo tuần.',
      'Họ cũng sẽ xoá các máy ảo đó ngay trong tuần vừa triển khai. Sáu mươi',
      'phần trăm số máy ảo cài Windows Server 2016, bốn mươi phần trăm còn lại cài',
      'Ubuntu Linux.',
      'Bạn phải bảo đảm công sức quản trị cho quy trình này được giảm bớt bằng cách dùng',
      'một dịch vụ Azure phù hợp.',
      'Giải pháp: Bạn khuyến nghị dùng Microsoft Managed Desktop.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  131: {
    q: [
      'Lập trình viên của công ty bạn dự định triển khai rất nhiều máy ảo tự dựng theo tuần.',
      'Họ cũng sẽ xoá các máy ảo đó ngay trong tuần vừa triển khai. Sáu mươi',
      'phần trăm số máy ảo cài Windows Server 2016, bốn mươi phần trăm còn lại cài',
      'Ubuntu Linux.',
      'Bạn phải bảo đảm công sức quản trị cho quy trình này được giảm bớt bằng cách dùng',
      'một dịch vụ Azure phù hợp.',
      'Giải pháp: Bạn khuyến nghị dùng Azure Reserved Virtual Machines (VM) Instances.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  132: {
    q: [
      'Lập trình viên của công ty bạn dự định triển khai rất nhiều máy ảo tự dựng theo tuần.',
      'Họ cũng sẽ xoá các máy ảo đó ngay trong tuần vừa triển khai. Sáu mươi',
      'phần trăm số máy ảo cài Windows Server 2016, bốn mươi phần trăm còn lại cài',
      'Ubuntu Linux.',
      'Bạn phải bảo đảm công sức quản trị cho quy trình này được giảm bớt bằng cách dùng',
      'một dịch vụ Azure phù hợp.',
      'Giải pháp: Bạn khuyến nghị dùng Azure DevTest Labs.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  133: {
    q: [
      'Bạn có một mạng tại chỗ gồm 100 máy chủ. Bạn cần khuyến nghị một giải pháp',
      'cung cấp thêm tài nguyên cho người dùng. Giải pháp phải giảm thiểu chi phí đầu tư và chi phí',
      'vận hành.',
      'Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: [
      'chuyển đổi hoàn toàn sang public cloud',
      'thêm một data center nữa',
      'một private cloud',
      'một hybrid cloud',
    ],
  },

  134: {
    q: [
      'Bạn được giao triển khai máy ảo Azure cho công ty. Bạn cần dùng',
      'giải pháp triển khai đám mây phù hợp.',
      'Giải pháp: Bạn nên dùng Software as a Service (SaaS).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  135: {
    q: [
      'Bạn được giao triển khai máy ảo Azure cho công ty. Bạn cần dùng',
      'giải pháp triển khai đám mây phù hợp.',
      'Giải pháp: Bạn nên dùng Platform as a Service (PaaS).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  136: {
    q: [
      'Bạn được giao triển khai máy ảo Azure cho công ty. Bạn cần dùng',
      'giải pháp triển khai đám mây phù hợp.',
      'Giải pháp: Bạn nên dùng Infrastructure as a Service (IaaS).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  137: {
    q: [
      'Azure Site Recovery cung cấp fault tolerance cho máy ảo.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì.', 'disaster recovery', 'elasticity', 'high availability'],
  },

  138: {
    q: [
      'Một Availability Zone trên Azure gồm các vị trí tách biệt về mặt vật lý trải trên hai châu lục.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'trong cùng một Azure region',
      'trải trên nhiều Azure region',
      'trong cùng một Azure datacenter',
    ],
  },

  139: {
    q: ['Azure Monitor có thể giám sát hiệu năng của các máy tính tại chỗ.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  140: {
    q: ['Azure Monitor có thể gửi cảnh báo tới các security group của Azure Active Directory.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  141: {
    q: ['Azure Monitor có thể kích hoạt cảnh báo dựa trên dữ liệu trong một Azure Log Analytics workspace.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  142: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ dữ liệu tại chỗ lên Azure. Bạn cần xác định xem Azure có',
      'đáp ứng các yêu cầu theo khu vực của công ty hay không. Bạn nên dùng gì?',
    ],
    o: ['Knowledge Center', 'Azure Marketplace', 'cổng MyApps', 'Trust Center'],
  },

  143: {
    q: ['Azure Policy giúp tổ chức làm gì?'],
    o: [
      'tạo chính sách bảo mật',
      'bắt buộc tuân thủ tiêu chuẩn của tổ chức và đánh giá mức độ tuân thủ trên diện rộng',
      'tạo quy tắc tường lửa',
    ],
  },

  144: {
    q: [
      'Bạn có 50 máy ảo đặt tại chỗ và 50 máy ảo đặt trên Azure. Các máy ảo tại chỗ và máy ảo trên',
      'Azure kết nối được với nhau. Đây là loại mô hình đám mây nào?',
    ],
    o: ['hybrid', 'private', 'public'],
  },

  145: {
    q: [
      'Bạn dự định cấp phát tài nguyên Infrastructure as a Service (IaaS) trên Azure. Tài nguyên nào là',
      'ví dụ của IaaS?',
    ],
    o: ['một Azure web app', 'một máy ảo Azure', 'một Azure logic app', 'một Azure SQL database'],
  },

  146: {
    q: [
      'Bạn nên dùng gì để đánh giá xem môi trường Azure của công ty có đáp ứng các yêu cầu pháp lý',
      'hay không?',
    ],
    o: [
      'Trang web Knowledge Center.',
      'Mục Advisor trong Azure portal.',
      'Compliance Manager trong Security Trust Portal.',
      'Mục Security Center trong Azure portal',
    ],
  },

  147: {
    q: [
      'Bạn nên dùng gì để đánh giá xem môi trường Azure của công ty có đáp ứng các yêu cầu pháp lý',
      'hay không?',
    ],
    o: ['Azure Service Health', 'Azure Knowledge Center', 'Microsoft Defender for Cloud', 'Azure Advisor'],
  },

  148: {
    q: [
      'Bạn nên dùng gì để đánh giá xem môi trường Azure của công ty có đáp ứng các yêu cầu pháp lý',
      'hay không?',
    ],
    o: ['Azure Service Health', 'Azure Knowledge Center', 'Azure Security Center', 'Azure Advisor'],
  },

  149: {
    q: [
      'Bạn dự định cấp phát tài nguyên Platform as a Service (PaaS) trên Azure. Những tài nguyên nào là',
      'ví dụ của PaaS?',
    ],
    o: ['một Azure web app', 'một máy ảo Azure', 'một Azure logic app', 'một Azure SQL database'],
  },

  150: {
    q: ['Azure Key Vault có thể phân tích file log bảo mật từ các máy ảo Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Azure Key Vault là dịch vụ đám mây cung cấp kho lưu trữ an toàn cho secret.']],
  },

  151: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Azure Key Vault được dùng để lưu secret của ứng dụng.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Azure security center', 'Azure Blob Storage', 'Azure Repos'],
  },

  152: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Azure Key Vault được dùng để lưu secret cho các tài khoản người dùng Azure Active Directory (Azure AD).',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì',
      'các tài khoản quản trị Azure Active Directory (Azure AD)',
      'Thông tin định danh cá nhân (PII)',
      'Ứng dụng phía máy chủ',
    ],
  },

  153: {
    q: [
      'Công ty bạn dự định tự động hoá việc triển khai máy chủ lên Azure. Cấp trên của bạn lo ngại',
      'rằng thông tin đăng nhập quản trị có thể bị lộ trong lúc triển khai.',
      'Bạn cần khuyến nghị một giải pháp Azure để mã hoá thông tin đăng nhập quản trị trong lúc',
      'triển khai.',
      'Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: [
      'Azure Key Vault',
      'Azure Information Protection',
      'Azure Security Center',
      'Azure Multi-Factor Authentication (MFA)',
    ],
  },

  154: {
    q: ['Azure Key Vault tự động sinh một secret mới sau mỗi lần sử dụng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  155: {
    q: ['Bạn nên dùng dịch vụ Azure nào để lưu chứng chỉ (certificate)?'],
    o: ['Azure Security Center', 'một Azure Storage account', 'Azure Key Vault', 'Azure Information Protection'],
  },

  156: {
    q: ['Nếu bạn không dùng tới máy ảo và toàn bộ tài nguyên của nó, bạn nên làm gì để tiết kiệm chi phí?'],
    o: ['Stop máy ảo', 'Shutdown máy ảo', 'Tắt nguồn máy ảo'],
  },

  157: {
    q: [
      'Bạn có một môi trường Azure gồm nhiều máy ảo. Bạn dự định triển khai',
      'một giải pháp cho phép máy trạm trong mạng tại chỗ giao tiếp được với các máy ảo',
      'trên Azure. Bạn cần khuyến nghị những tài nguyên Azure nào phải được tạo cho giải pháp này.',
      'Bạn nên đưa hai tài nguyên Azure nào vào khuyến nghị?',
    ],
    o: [
      'một virtual network gateway',
      'một load balancer',
      'một application gateway',
      'một virtual network',
      'một gateway subnet',
    ],
  },

  158: {
    q: [
      'Azure web app, Azure logic app và Azure SQL database đều là ví dụ của Platform as a Service',
      '(PaaS).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  159: {
    q: ['Máy chủ DNS chạy trên một máy ảo là PaaS.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Nói chung, PaaS (Platform-as-a-Service) là một nền tảng nơi lập trình viên thiết kế và triển khai ứng dụng. Vì vậy, một máy chủ DNS thông thường chạy trên máy ảo thì không phải PaaS. Máy ảo Azure được xem là',
      ],
      ['IaaS vì nó cung cấp tài nguyên tính toán.'],
    ],
  },

  160: {
    q: ['SQL Server cài trên một máy ảo là SaaS.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Nếu bạn cài SQL Server lên máy ảo bằng tay hoặc bằng image dựng sẵn, thì nó vẫn chỉ là một máy ảo. Nghĩa là khách hàng vẫn phải tự quản lý toàn bộ phần nền tảng.',
      ],
    ],
  },

  161: {
    q: ['Azure SQL Database là ví dụ của PaaS.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Khách hàng mua Azure SQL Database không phải bảo trì bất cứ thứ gì liên quan tới nền tảng SQL, vì Microsoft lo phần đó.',
      ],
    ],
  },

  162: {
    q: ['Azure Files là ví dụ của SaaS.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Files là dịch vụ PaaS (platform-as-a-service) của Microsoft Azure, dựng trên nền Azure Storage. Nó cung cấp file share có quản lý hoàn toàn thông qua giao thức SMB (Server Message Block).',
      ],
    ],
  },

  163: {
    q: ['Điện toán đám mây tận dụng ảo hoá để phục vụ nhiều khách hàng cùng lúc.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  164: {
    q: ['Dịch vụ nào cung cấp tính toán serverless trên Azure?'],
    o: ['Azure Virtual Machines', 'Azure Functions', 'Azure storage account', 'Azure dedicated hosts'],
  },

  165: {
    q: ['Việc phát hành một tính năng cho toàn bộ khách hàng Azure được gọi là gì?'],
    o: ['General Availability', 'General Preview', 'Public Preview'],
  },
};
