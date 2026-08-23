/**
 * Bản dịch tiếng Việt cho câu 41–100 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  41: {
    q: ['Azure Active Directory Domain Services có thuộc Microsoft Entra không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  42: {
    q: ['Bạn có thể tạo nhiều managed domain cho cùng một Azure AD directory.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  43: {
    q: ['Bạn có thể bật Azure AD DS trong một virtual network kiểu Azure Resource Manager.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  44: {
    q: ['Bạn luôn có thể mời guest user trong directory của mình dùng Azure AD DS.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  45: {
    q: ['Bạn có thể tạm dừng (pause) một Azure AD DS managed domain.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  46: {
    q: ['Azure AD DS có sẵn các tuỳ chọn về tính sẵn sàng cao (high availability).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  47: {
    q: [
      'Bạn có một môi trường Azure. Bạn cần tạo một máy ảo Azure mới từ một máy tính bảng chạy',
      'hệ điều hành Android. Ba giải pháp khả dĩ là gì? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'Dùng Bash trong Azure Cloud Shell.',
      'Dùng PowerShell trong Azure Cloud Shell.',
      'Dùng cổng PowerApps.',
      'Dùng Security & Compliance admin center.',
      'Dùng Azure portal.',
    ],
  },

  48: {
    q: [
      'Bạn dự định chuyển một ứng dụng web lên Azure. Ứng dụng web này được người dùng bên ngoài truy cập.',
      'Bạn cần khuyến nghị một giải pháp triển khai đám mây sao cho công sức quản trị ứng dụng web là ít nhất.',
      'Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: [
      'Software as a Service (SaaS)',
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
      'Database as a Service (DaaS)',
    ],
    e: [
      [
        'Azure App Service là dịch vụ platform-as-a-service (PaaS) cho phép bạn tạo ứng dụng web và ứng dụng di động cho mọi nền tảng hay thiết bị, đồng thời kết nối tới dữ liệu ở bất cứ đâu, trên đám mây hay tại chỗ.',
        'App Service bao gồm các năng lực web và di động mà trước đây được cung cấp riêng lẻ dưới tên Azure Websites và Azure Mobile Services.',
      ],
    ],
  },

  49: {
    q: [
      'Bạn có một subscription SUB1 chứa một máy ảo VM1. Bạn tạo một subscription mới SUB2 và',
      'chuyển VM1 sang SUB2. Việc này có làm được không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  50: {
    q: ['Bạn có thể chuyển máy ảo sang một region khác của Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  51: {
    q: [
      'Máy ảo VM1 của bạn nằm trong Resource Group RG1. Bạn muốn chép VM1 sang một resource group',
      'khác là RG2. Việc này có làm được không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  52: {
    q: [
      'Máy ảo VM1 của bạn nằm trong Resource Group RG1 thuộc Subscription A. Bạn muốn chép VM1 sang',
      'một resource group khác là RG2 thuộc Subscription B. Việc này có làm được không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  53: {
    q: [
      'Công ty bạn có nhiều máy ảo Azure trong một Availability Zone tại Region A. Bạn được yêu cầu',
      'chuyển một máy ảo từ Availability Zone này sang một Availability Zone khác tại Region B. Việc này có',
      'làm được không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  54: {
    q: [
      'Công ty bạn đã dựng sẵn một private cloud và muốn bắt đầu dùng mô hình Hybrid cloud của Microsoft Azure.',
      'Họ sẽ phải chuyển toàn bộ mô hình private cloud của mình đi thì mới đạt được mô hình hybrid cloud. Đúng',
      'hay sai?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  55: {
    q: [
      'Công ty bạn đã dựng sẵn một private cloud và muốn bắt đầu dùng mô hình Public cloud của Microsoft Azure.',
      'Khi nào một tổ chức có thể ngừng vận hành hạ tầng private cloud đặt trong datacenter của mình?',
    ],
    o: [
      'Khi họ có một giải pháp hybrid',
      'Khi toàn bộ máy chủ của họ nằm trong private cloud',
      'Khi toàn bộ máy chủ của họ nằm trong public cloud',
      'Khi toàn bộ máy chủ của họ nằm trong public cloud hoặc private cloud',
    ],
  },

  56: {
    q: ['Trong mô hình software as a service (SaaS), khách hàng cung cấp thứ gì?'],
    o: [
      'dữ liệu của ứng dụng',
      'nơi lưu trữ dữ liệu',
      'tài nguyên tính toán',
      'phần mềm ứng dụng',
    ],
  },

  57: {
    q: [
      'Công ty bạn dự định triển khai vài ứng dụng tự viết lên Azure. Các ứng dụng này cung cấp',
      'dịch vụ xuất hoá đơn cho khách hàng của công ty. Mỗi ứng dụng cần cài sẵn vài ứng dụng và',
      'dịch vụ tiên quyết đi kèm. Bạn cần khuyến nghị một giải pháp triển khai đám mây cho tất cả các',
      'ứng dụng đó. Bạn nên khuyến nghị gì?',
    ],
    o: [
      'Software as a Service (SaaS)',
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
    ],
  },

  58: {
    q: [
      'Bạn có 50 máy ảo đặt tại chỗ và 50 máy ảo đặt trên Azure. Các máy ảo tại chỗ và máy ảo trên',
      'Azure kết nối được với nhau. Đây là loại mô hình đám mây nào?',
    ],
    o: ['hybrid cloud', 'private cloud', 'public cloud'],
  },

  59: {
    q: ['Google Apps, Microsoft Office 365, Gmail, Yahoo và Facebook là ví dụ của SaaS.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  60: {
    q: ['App Services, Azure Search và Azure CDN là ví dụ của mô hình nào?'],
    o: [
      'Software as a Service (SaaS)',
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
    ],
  },

  61: {
    q: [
      'Một công ty dự định triển khai tài nguyên Microsoft Azure vào một Resource Group (RG1). Nhưng các',
      'tài nguyên đó lại thuộc các vị trí khác nhau. Bạn có thể có các tài nguyên cùng thuộc một resource group',
      'nhưng nằm ở nhiều vị trí khác nhau không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        '• Resource Group (RG1) vị trí: West US',
        '• Storage account, vị trí: West US',
        '• Virtual Machine: Central US',
        '• Function App: West India',
        '• Web App: West Europe',
        '• Data Factory: South India',
      ],
    ],
  },

  62: {
    q: [
      'Microsoft SQL Server 2019 cài trên một máy ảo Azure là ví dụ của Platform as a',
      'Service (PaaS).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  63: {
    q: ['Azure SQL Database là ví dụ của Platform as a Service (PaaS).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  64: {
    q: ['Azure Cosmos DB là ví dụ của Platform as a Service (PaaS).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  65: {
    q: ['Azure Cosmos DB là ví dụ của Serverless.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  66: {
    q: [
      'Bạn dự định cấp phát tài nguyên Infrastructure as a Service (IaaS) trên Azure. Ba tài nguyên nào là',
      'ví dụ của IaaS?',
    ],
    o: [
      'một Azure web app',
      'một máy ảo Azure',
      'một Azure logic app',
      'Azure Disk Storage',
      'Azure Virtual Network',
    ],
  },

  68: {
    q: [
      'Bạn dự định mở rộng mạng công ty ra Azure. Mạng này có một thiết bị VPN dùng địa chỉ IP',
      '131.107.200.1. Bạn cần tạo một tài nguyên Azure để định nghĩa thiết bị VPN đó trong Azure.',
      'Bạn nên tạo tài nguyên Azure nào? Hãy chọn tài nguyên phù hợp trong vùng đáp án.',
    ],
    o: [
      'Services',
      'NAT gateways',
      'Application gateways',
      'Local network gateways',
      'Virtual network gateways',
      'On-premises Data Gateways',
      'Azure Data Box Gateway',
      'Azure Stack Edge / Data Box Gateway — Web Application Firewall policies',
    ],
  },

  69: {
    q: [
      'Môi trường Azure của bạn có nhiều máy ảo. Bạn cần bảo đảm một máy ảo tên VM1 truy cập được',
      'từ Internet qua HTTP. Hai giải pháp khả dĩ là gì? Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'Sửa một Azure Traffic Manager profile',
      'Sửa một network security group (NSG)',
      'Sửa một DDoS protection plan',
      'Sửa một Azure firewall',
    ],
  },

  70: {
    q: ['Bạn có thể cải thiện composite SLA bằng cách thêm dịch vụ dự phòng (redundant) cho ứng dụng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  71: {
    q: ['Bạn có thể cải thiện composite SLA bằng cách thêm dịch vụ phụ thuộc (dependent) cho ứng dụng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  72: {
    q: ['SLA trên Azure là thoả thuận chính thức giữa Microsoft và khách hàng. SLA bao gồm yếu tố nào?'],
    o: ['Durability', 'Scalability', 'Elasticity', 'Availability'],
  },

  73: {
    q: ['Dịch vụ Azure chịu ràng buộc bởi Service Level Agreement (SLA) trong giai đoạn nào?'],
    o: ['Private preview', 'Public preview', 'Generally available (GA)'],
  },

  74: {
    q: ['Trong giai đoạn Public Preview, chỉ những ai có lời mời đặc biệt mới truy cập được dịch vụ.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  76: {
    q: ['Microsoft Customer Support Services có cung cấp dịch vụ hỗ trợ trong giai đoạn public preview.'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  80: {
    q: [
      'Single sign-on (SSO) là phương thức __________ cho phép người dùng đăng nhập lần đầu rồi truy cập',
      'nhiều ứng dụng và tài nguyên khác nhau bằng cùng một mật khẩu.',
    ],
    o: ['kiểm tra hợp lệ (validation)', 'xác thực (authentication)', 'cấu hình (configuration)', 'phân quyền (authorization)'],
  },

  81: {
    q: ['Kiểu nhân bản nào của Azure Storage là tuỳ chọn rẻ nhất?'],
    o: [
      'Locally redundant storage (LRS)',
      'Zone-redundant storage (ZRS)',
      'Geo-redundant storage (GRS)',
      'Geo-zone-redundant storage (GZRS)',
    ],
  },

  82: {
    q: ['Các bản sao dữ liệu trong LRS được giữ ở đâu?'],
    o: [
      'Trong cùng một region',
      'Trải qua nhiều availability zone tách biệt',
      'Region phụ',
      'Cả region chính lẫn region phụ',
    ],
  },

  83: {
    q: ['Kiểu nhân bản nào của Azure Storage thuộc nhóm “Redundancy in the primary region”?'],
    o: [
      'Locally redundant storage (LRS)',
      'Zone-redundant storage (ZRS)',
      'Geo-redundant storage (GRS)',
      'Geo-zone-redundant storage (GZRS)',
    ],
  },

  84: {
    q: ['Kiểu nhân bản nào của Azure Storage thuộc nhóm “Redundancy in a secondary region”?'],
    o: [
      'Locally redundant storage (LRS)',
      'Zone-redundant storage (ZRS)',
      'Geo-redundant storage (GRS)',
      'Geo-zone-redundant storage (GZRS)',
    ],
  },

  89: {
    q: ['Những tầng truy cập (access tier) nào của Azure Storage là có thật?'],
    o: ['Hot tier', 'Frequent tier', 'Cool tier', 'Cold tier', 'Archive tier'],
  },

  90: {
    q: ['Blob storage account và general-purpose storage account là một, không khác gì nhau.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  91: {
    q: ['Trong Azure portal, bạn thường dùng trang nào để gán vai trò nhằm cấp quyền truy cập tài nguyên Azure?'],
    o: ['Access Control (IAM)', 'Policy hub', 'User Access Management', 'User Role Management'],
  },

  92: {
    q: ['Azure Active Directory cho phép bạn đặt quy tắc thành viên động (dynamic membership rule).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  94: {
    q: ['Bạn có thể triển khai máy chủ vật lý vào những mô hình đám mây nào?'],
    o: [
      'public cloud',
      'private cloud, hybrid cloud và public cloud',
      'chỉ hybrid cloud',
      'private cloud và hybrid cloud',
    ],
  },

  95: {
    q: ['Cách tính giá pay-as-you-go của Azure là ví dụ của CapEx.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  96: {
    q: ['Trả tiền điện cho datacenter của bạn là ví dụ của OpEx.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  97: {
    q: ['Tự dựng datacenter của riêng mình là ví dụ của CapEx.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  98: {
    q: ['Azure cho phép linh hoạt chuyển đổi giữa chi phí đầu tư (CapEx) và chi phí vận hành (OpEx).'],
    s: [{ p: '', o: ['True', 'False'] }],
  },

  99: {
    q: [
      'Khi một máy ảo Azure bị dừng, bạn vẫn tiếp tục trả chi phí lưu trữ gắn với máy ảo',
      'đó.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  100: {
    q: ['Một tài nguyên Azure có thể có nhiều lock.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },
};
