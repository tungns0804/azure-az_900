/**
 * Bản dịch tiếng Việt cho câu 301–365 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  301: {
    q: [
      'Bộ phận CNTT làm cách nào để bảo đảm nhân viên tại các cửa hàng bán lẻ của công ty chỉ truy cập được',
      'ứng dụng công ty từ những thiết bị tablet đã được duyệt?',
    ],
    o: ['SSO', 'Conditional Access', 'Multifactor authentication'],
  },

  302: {
    q: [
      'Bộ phận CNTT làm cách nào để dùng đặc điểm sinh trắc học, ví dụ nhận diện khuôn mặt, giúp',
      'nhân viên giao hàng chứng minh danh tính?',
    ],
    o: ['SSO', 'Conditional Access', 'Multifactor authentication'],
    e: [
      [
        'Xác thực bằng multifactor authentication có thể gồm thứ người dùng',
        'biết, thứ người dùng có, và thứ chính người dùng là.',
      ],
    ],
  },

  303: {
    q: [
      'Bộ phận CNTT làm cách nào để giảm số lần người dùng phải xác thực khi truy cập nhiều',
      'ứng dụng?',
    ],
    o: ['SSO', 'Conditional Access', 'Multifactor authentication'],
    e: [
      [
        'SSO cho phép người dùng chỉ cần nhớ một ID và một mật khẩu để truy cập nhiều',
        'ứng dụng.',
      ],
    ],
  },

  304: {
    q: [
      'Công ty làm cách nào để cho phép một số người dùng kiểm soát máy ảo trong từng môi trường nhưng',
      'không cho họ sửa mạng và các tài nguyên khác trong cùng resource group hoặc cùng subscription',
      'Azure?',
    ],
    o: [
      'Tạo một role assignment thông qua Azure role-based access control (Azure RBAC).',
      'Tạo một policy trong Azure Policy để kiểm tra việc sử dụng tài nguyên.',
      'Tách môi trường thành các resource group riêng biệt.',
    ],
    e: [
      [
        'Azure RBAC cho phép bạn tạo các vai trò định nghĩa quyền truy cập. Bạn có thể',
        'tạo một vai trò chỉ giới hạn quyền truy cập vào máy ảo, và một vai trò thứ hai',
        'cho quản trị viên quyền truy cập vào mọi thứ.',
      ],
    ],
  },

  305: {
    q: [
      'Công ty bạn dự định chuyển lên Azure. Công ty có nhiều phòng ban. Toàn bộ tài nguyên Azure',
      'mà mỗi phòng ban dùng sẽ do một quản trị viên của phòng ban đó quản lý.',
      'Hai kỹ thuật khả dĩ để phân tách Azure theo phòng ban là gì?',
    ],
    o: [
      'nhiều thư mục Azure Active Directory (Azure AD)',
      'nhiều subscription',
      'nhiều region',
      'nhiều resource group',
    ],
    e: [
      [
        'Resource group là một hộp chứa gom các tài nguyên',
        'liên quan của một giải pháp Azure.',
        'Resource group có thể chứa toàn bộ',
        'tài nguyên của giải pháp, hoặc chỉ những',
        'tài nguyên bạn muốn quản lý theo',
        'nhóm.',
      ],
      [
        'Azure subscription là hộp chứa cho',
        'tài nguyên Azure. Nó cũng là ranh giới của',
        'quyền truy cập tài nguyên và của việc thanh toán.',
        'Bạn bị tính tiền hằng tháng cho toàn bộ',
        'tài nguyên trong một subscription. Một',
        'Azure tenant (Azure Active Directory) có thể',
        'chứa nhiều Azure subscription.',
      ],
    ],
  },

  306: {
    q: [
      'Bộ phận pháp chế tìm ở đâu thông tin về việc đám mây của Microsoft giúp họ bảo vệ',
      'dữ liệu nhạy cảm và tuân thủ luật cùng quy định hiện hành?',
    ],
    o: ['Microsoft Privacy Statement', 'Trust Center', 'Online Services Terms'],
  },

  307: {
    q: [
      'Công ty tìm ở đâu thông tin chi tiết về dữ liệu cá nhân mà Microsoft xử lý và cách',
      'Microsoft xử lý chúng, bao gồm cả trường hợp Cortana?',
    ],
    o: ['Microsoft Privacy Statement', 'Tài liệu tuân thủ của Azure', 'Microsoft compliance offerings'],
  },

  308: {
    q: [
      'Website của công ty bạn có dữ liệu trọng yếu phải được bảo vệ bằng mọi giá. Để nhân bản',
      'dữ liệu, doanh nghiệp cần chép dữ liệu sang một region phụ từ region chính, qua nhiều',
      'datacenter cách nhau rất xa.',
      'Tuỳ chọn lưu trữ nào phù hợp nhất với bạn?',
    ],
    o: [
      'Premium storage',
      'Zone redundant storage (ZRS)',
      'Geo-redundant storage (GRS)',
      'Locally-redundant storage (LRS)',
    ],
    e: [
      [
        'Geo-redundant storage (GRS) — nhân bản dữ liệu của bạn sang một region phụ nằm ở',
        'vị trí địa lý khác với region chính.',
      ],
    ],
  },

  309: {
    q: [
      'Cách tốt nhất để công ty bảo đảm họ chỉ triển khai những cỡ máy ảo (SKU) tiết kiệm chi phí',
      'là gì?',
    ],
    o: [
      'Tạo một policy trong Azure Policy quy định các cỡ SKU được phép.',
      'Định kỳ kiểm tra thủ công xem những cỡ SKU nào đang được dùng.',
      'Tạo một vai trò Azure RBAC định nghĩa các cỡ SKU máy ảo được phép.',
    ],
  },

  310: {
    q: [
      'Cách nào có lẽ là tốt nhất để công ty xác định mỗi tài nguyên Azure thuộc về bộ phận thanh toán',
      'nào?',
    ],
    o: [
      'Theo dõi việc sử dụng tài nguyên trong một bảng tính.',
      'Tách hệ thống thành các subscription Azure riêng, mỗi subscription thuộc về một bộ phận thanh toán riêng.',
      'Gắn cho mỗi tài nguyên một tag ghi bộ phận thanh toán tương ứng.',
    ],
    e: [
      [
        'Tag cung cấp thông tin bổ sung, hay siêu dữ liệu, về tài nguyên của bạn. Bạn có thể tạo một',
        'tag tên Billing Dept với giá trị là tên của bộ phận',
        'thanh toán. Bạn dùng được Azure Policy để bảo đảm tag đúng được gán',
        'khi tài nguyên được cấp phát.',
      ],
    ],
  },

  311: {
    q: [
      'Công ty bạn có các máy ảo (VM) đặt trên Microsoft Azure. Các máy ảo nằm trong',
      'một Azure virtual network duy nhất tên VNet1. Công ty có những người làm việc từ xa. Những người này',
      'cần truy cập các máy ảo trên VNet1.',
      'Bạn cần cấp quyền truy cập cho những người làm việc từ xa.',
      'Bạn nên làm gì?',
    ],
    o: [
      'Cấu hình một VPN Site-to-Site (S2S).',
      'Cấu hình một VPN VNet-to-VNet.',
      'Cấu hình một VPN Point-to-Site (P2S).',
      'Cấu hình DirectAccess trên một máy ảo chạy Windows Server 2012.',
      'Cấu hình một Multi-Site VPN.',
    ],
  },

  312: {
    q: ['Single sign-on (SSO) là phương thức __________'],
    o: ['cấu hình', 'kiểm tra hợp lệ', 'xác thực', 'phân quyền'],
    e: [
      [
        'Single sign-on (SSO) là phương thức xác thực cho phép người dùng đăng nhập lần đầu',
        'rồi truy cập nhiều ứng dụng và tài nguyên khác nhau bằng cùng một mật khẩu.',
      ],
    ],
  },

  313: {
    q: [
      'Bạn có một mạng tại chỗ gồm vài máy chủ. Bạn dự định chuyển toàn bộ máy chủ',
      'lên Azure. Bạn cần khuyến nghị một giải pháp bảo đảm một số máy chủ vẫn sẵn sàng nếu một',
      'data center của Azure ngừng hoạt động trong thời gian dài.',
      'Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: [
      'Availability Set',
      'Fault tolerance',
      'Scalability',
      'elasticity',
      'low latency — Fault tolerance là khả năng hệ thống tiếp tục hoạt động khi một số thành phần của nó gặp sự cố.',
    ],
    e: [['thành phần.']],
  },

  314: {
    q: ['Trên Azure, bạn hiểu Application availability là gì?'],
    o: [
      'Ứng dụng sẵn sàng cho người dùng cao cấp',
      'SLA riêng của từng tài nguyên',
      'Tổng thời gian hệ thống hoạt động và làm việc bình thường',
    ],
  },

  315: {
    q: [
      'Bạn là kỹ sư dữ liệu của công ty. Một ứng dụng dùng cơ sở dữ liệu NoSQL để lưu dữ liệu.',
      'Cơ sở dữ liệu này thuộc loại NoSQL key-value và wide-column. Lập trình viên cần truy cập dữ liệu',
      'trong cơ sở dữ liệu bằng API. Bạn cần xác định API nào phù hợp với mô hình và loại cơ sở dữ liệu đó.',
      'Bạn nên dùng hai API nào?',
    ],
    o: ['Cassandra API', 'Table API', 'SQL API', 'Gremlin API', 'MongoDB API'],
    e: [['Cả Cassandra API và MongoDB API đều có cặp key-value.']],
  },

  316: {
    q: [
      'Hai loại khách hàng nào đủ điều kiện dùng Azure Government để phát triển giải pháp đám mây?',
      'Mỗi đáp án đúng là một lời giải trọn vẹn.',
      'LƯU Ý: Mỗi lựa chọn đúng được một điểm.',
    ],
    o: [
      'một nhà thầu của chính phủ Canada',
      'một nhà thầu của chính phủ châu Âu',
      'một cơ quan nhà nước của Hoa Kỳ',
      'một cơ quan nhà nước của châu Âu',
      'một nhà thầu của chính phủ Hoa Kỳ',
    ],
  },

  317: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Công ty bạn triển khai Azure Policy để tự động thêm hình mờ (watermark) vào tài liệu Microsoft Word',
      'có chứa thông tin thẻ tín dụng.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì',
      'DDoS protection',
      'Azure Information Protection',
      'Azure Active Directory (Azure AD) Identity Protection',
    ],
  },

  318: {
    q: ['Định nghĩa availability set?'],
    o: [
      'Một nhóm các instance của ứng dụng nằm trong một availability zone',
      'Một nhóm logic các máy ảo giúp Azure hiểu được ứng dụng của bạn được xây dựng thế nào để bảo đảm dự phòng và tính sẵn sàng.',
      'Một tập hợp tài nguyên',
    ],
  },

  319: {
    q: [
      'Multi-factor authentication (MFA) trong Azure Active Directory (Azure AD) được dùng để cấp quyền truy cập',
      'tài nguyên dựa trên chính sách của tổ chức, đúng không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  320: {
    q: [
      'Conditional Access trong Azure Active Directory (Azure AD) được dùng để cấp quyền truy cập tài nguyên',
      'dựa trên chính sách của tổ chức, đúng không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Conditional Access là công cụ Azure Active Directory dùng để cho phép (hoặc từ chối) truy cập',
        'tài nguyên dựa trên tín hiệu danh tính. Conditional Access là phương thức MFA',
        '(multifactor authentication) tinh vi hơn.',
      ],
    ],
  },

  321: {
    q: [
      'Bạn dự định xây một kho dữ liệu doanh nghiệp trên Azure để phân tích dữ liệu kinh doanh.',
      'Yêu cầu là xây một môi trường tích hợp hỗ trợ phát triển các giải pháp phân tích',
      'đầu-cuối.',
      'Bạn nên dùng dịch vụ nào cho việc này?',
    ],
    o: ['Azure Machine Learning', 'Azure Synapse Analytics', 'Azure Database for PostgreSQL'],
    e: [
      [
        'Azure Machine Learning là nền tảng phát triển để lập trình machine learning.',
        'Azure Synapse Analytics là nền tảng phân tích dữ liệu, kết hợp tích hợp dữ liệu, kho dữ liệu',
        'doanh nghiệp và phân tích dữ liệu lớn.',
        'Azure Database for PostgreSQL là dịch vụ cơ sở dữ liệu quan hệ dựa trên nhân Postgres mã nguồn',
        'mở. Nó không dùng để xây kho dữ liệu.',
      ],
    ],
  },

  322: {
    q: [
      'Công ty bạn dự định bắt đầu dùng Azure và sẽ chuyển toàn bộ tài nguyên mạng lên Azure. Bạn',
      'cần khởi động quá trình lập kế hoạch bằng việc tìm hiểu Azure.',
      'Bạn nên tạo gì trước tiên?',
    ],
    o: ['một subscription', 'một resource group', 'một virtual network', 'một management group'],
  },

  323: {
    q: [
      'Đâu là một bộ công cụ quản trị lặp lại được, giúp các nhóm phát triển nhanh chóng',
      'dựng và tạo môi trường mới trong khi vẫn tuân thủ quy định của tổ chức, nhờ đó tăng tốc phát triển',
      'và triển khai?',
    ],
    o: [
      'Azure Blueprints',
      'Cấu hình pipeline Continuous Integration/Continuous Deployment (CI/CD)',
      'Azure Policy',
      'Azure DevOps',
    ],
  },

  324: {
    q: ['Phát biểu nào sau đây định nghĩa đúng Edge Computing?'],
    o: [
      'Edge computing cho phép bạn bảo mật ứng dụng ở nhiều vị trí.',
      'Edge computing cho phép khách hàng chạy máy ảo, container và dịch vụ dữ liệu tại các vị trí biên.',
      'Edge computing cho phép bạn tạo ứng dụng web có khả năng mở rộng.',
    ],
  },

  325: {
    q: ['Thứ nào sau đây có thể cho phép hoặc từ chối truy cập dựa trên địa chỉ IP nguồn?'],
    o: ['Azure Active Directory', 'Azure Firewall', 'VPN Gateway'],
    e: [
      [
        'Azure Firewall cấp quyền truy cập máy chủ dựa trên địa chỉ IP nguồn của từng yêu cầu. Bạn',
        'tạo các quy tắc tường lửa chỉ định dải địa chỉ IP. Chỉ máy khách từ những địa chỉ IP',
        'được cấp phép đó mới truy cập được máy chủ. Quy tắc tường lửa cũng gồm thông tin về giao thức',
        'mạng và cổng cụ thể.',
      ],
    ],
  },

  326: {
    q: [
      'Từ Azure Cloud Shell, bạn theo dõi được các tiêu chuẩn và quy định pháp lý của công ty, ví dụ',
      'ISO 27001.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'Microsoft Cloud Partner Portal',
      'Compliance Manager',
      'Trust Center',
    ],
  },

  328: {
    q: [
      'Hạ tầng hiện tại của tổ chức bạn nằm tại chỗ. Do nhu cầu thay đổi, tổ chức muốn',
      'chuyển một phần hạ tầng lên đám mây Azure.',
      'Bạn được giao đề xuất một mô hình điện toán đám mây tận dụng được tối đa hạ tầng tại chỗ và',
      'cũng cho phép dùng chung dữ liệu và ứng dụng giữa hạ tầng tại chỗ và hạ tầng đám mây.',
      'Bạn sẽ đề xuất mô hình điện toán đám mây nào?',
    ],
    o: ['public cloud', 'private cloud', 'hybrid cloud'],
  },

  329: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Resource group cho phép tổ chức quản lý mức độ tuân thủ của tài nguyên Azure',
      'trải trên nhiều subscription.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Azure App Service plans', 'Azure policies', 'Management groups'],
  },

  330: {
    q: [
      'Tuỳ chọn nào cho phép mở rộng mạng tại chỗ vào đám mây Microsoft qua một kết nối',
      'riêng với sự hỗ trợ của nhà cung cấp kết nối?',
    ],
    o: ['VPN Point-to-Site (P2S)', 'VPN Site-to-Site', 'ExpressRoute'],
  },

  331: {
    q: [
      'Tuỳ chọn nào được dùng để thiết lập liên lạc giữa một thiết bị VPN tại chỗ và một Azure',
      'VPN gateway thông qua đường hầm mã hoá trên Internet?',
    ],
    o: ['VPN Point-to-Site (P2S)', 'VPN Site-to-Site', 'ExpressRoute'],
    e: [
      [
        'Site-to-site VPN: thiết lập kết nối giữa thiết bị VPN tại chỗ và một Azure VPN',
        'Gateway được triển khai trong một virtual network.',
        'Kiểu kết nối này cho phép mọi tài nguyên tại chỗ được cấp phép liên lạc để',
        'truy cập một virtual network thông qua đường hầm mã hoá.',
      ],
    ],
  },

  332: {
    q: [
      'Tuỳ chọn nào cho phép tạo một kết nối an toàn tới virtual network của bạn từ một máy khách',
      'đơn lẻ?',
    ],
    o: ['VPN Point-to-Site (P2S)', 'VPN Site-to-Site', 'ExpressRoute'],
  },

  333: {
    q: ['Những dịch vụ Azure nào sau đây không bắt bạn phải chọn một region cụ thể?'],
    o: [
      'Virtual Machines',
      'Các loại lưu trữ (Storage types)',
      'Azure Active Directory',
      'Azure Traffic Manager',
      'Azure DNS',
    ],
  },

  334: {
    q: [
      'Bạn dùng dịch vụ Azure nào để gửi nhanh hàng triệu thông báo tới thiết bị iOS, Android,',
      'Windows hay Kindle, làm việc được với APNs (Apple Push Notification service), GCM (Google Cloud',
      'Messaging), WNS (Windows Push Notification Service) và nhiều dịch vụ khác?',
    ],
    o: ['IoT Hub', 'Azure Notification Hubs', 'Azure Machine Learning', 'Azure Monitor'],
    e: [
      [
        'Azure Notification Hubs là bộ máy gửi push notification cho di động, mở rộng cực lớn, dùng để gửi nhanh',
        'hàng triệu thông báo tới thiết bị iOS, Android, Windows hay Kindle, làm việc được với APNs (Apple',
        'Push Notification service), GCM (Google Cloud Messaging), WNS (Windows Push Notification',
        'Service) và nhiều dịch vụ khác.',
      ],
    ],
  },

  335: {
    q: ['Một ứng dụng nên kết nối tới đâu để lấy security token?'],
    o: [
      'Azure Storage account',
      'Azure Active Directory (Azure AD)',
      'Azure security center',
      'Azure Key Vault',
    ],
    e: [
      [
        'Azure AD xác thực người dùng và cấp access token. Access token là một security token do',
        'máy chủ cấp quyền phát hành. Security Token không phải là secret. Mật khẩu, private key,',
        'chứng chỉ… mới là secret.',
        'Token được sinh ra khi có yêu cầu và thay đổi gần như theo từng yêu cầu, chỉ có hiệu lực',
        'trong thời gian ngắn. Vì vậy không có lý do gì phải bảo vệ token bằng cách cất trong vault để dùng',
        'khi cần, nó không phải một giá trị cố định.',
      ],
    ],
  },

  336: {
    q: [
      'Bạn cần nắm được các tiêu chuẩn bảo mật mới nhất của Azure để bảo vệ dữ liệu. Bạn nên dùng',
      'dịch vụ nào sau đây để làm việc đó?',
    ],
    o: [
      'Azure Government',
      'Online Terms of Service',
      'Trust Center',
      'Tài liệu tuân thủ của Azure',
    ],
    e: [
      [
        'a)',
        'Azure Government đáp ứng nhu cầu bảo mật và tuân thủ của các cơ quan liên bang, tiểu bang và',
        'địa phương của Hoa Kỳ cùng các nhà cung cấp giải pháp của họ.',
        'b)',
        'Online Terms of Service (OST) là thoả thuận giữa Microsoft và bạn. OST nêu chi tiết',
        'nghĩa vụ của cả hai bên về việc xử lý và bảo mật dữ liệu khách hàng cùng dữ liệu cá',
        'nhân.',
        'c)',
        'Trust Center hiện thực hoá các nguyên tắc của Microsoft về việc giữ toàn vẹn dữ liệu trên đám mây,',
        'và Microsoft áp dụng bảo mật, quyền riêng tư, tuân thủ và minh bạch trong mọi sản phẩm',
        'cùng dịch vụ đám mây của mình.',
        'd)',
        'Azure Compliance Document cung cấp tài liệu chi tiết về các tiêu chuẩn pháp lý và quy định',
        'của Azure cùng mức độ tuân thủ. Bạn cũng xem được các blueprint tham khảo có thể áp dụng',
        'trực tiếp cho subscription Azure của mình.',
      ],
    ],
  },

  337: {
    q: ['Azure Cosmos DB là ví dụ của loại dịch vụ đám mây nào?'],
    o: [
      'platform as a service (PaaS)',
      'infrastructure as a service (IaaS)',
      'serverless',
      'software as a service (SaaS)',
    ],
  },

  339: {
    q: ['Bạn truy cập Compliance Manager từ đâu?'],
    o: [
      'Azure Active Directory admin center',
      'Azure portal',
      'Microsoft 365 Compliance center',
      'Azure Service Trust Portal',
      'Microsoft Purview compliance portal',
    ],
  },

  340: {
    q: [
      'Thứ nào sau đây cung cấp thông tin về bảo trì theo kế hoạch và các thay đổi có thể',
      'ảnh hưởng tới tính sẵn sàng của tài nguyên của bạn?',
    ],
    o: ['Azure Monitor', 'Azure Security Center', 'Azure Service Health'],
    e: [
      [
        'Azure Service Health là bộ trải nghiệm cung cấp hướng dẫn và hỗ trợ cá nhân hoá',
        'khi sự cố của dịch vụ Azure ảnh hưởng tới bạn. Nó có thể báo cho bạn, giúp bạn hiểu tác động của',
        'sự cố, và cập nhật liên tục cho tới khi sự cố được xử lý xong. Azure Service Health cũng giúp bạn',
        'chuẩn bị cho bảo trì theo kế hoạch và những thay đổi có thể ảnh hưởng tới tính sẵn sàng của tài nguyên.',
      ],
    ],
  },

  341: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Bạn dùng Management group để tổ chức tài nguyên trong một subscription Azure.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì',
      'Resource groups',
      'Management groups',
      'Administrative units — Tài nguyên Azure được gom vào resource group, đóng vai trò hộp chứa logic để triển khai và quản lý các tài nguyên Azure như web app, cơ sở dữ liệu và storage account.',
    ],
    e: [['Azure như web app, cơ sở dữ liệu và storage account được triển khai và quản lý.']],
  },

  342: {
    q: ['Thứ nào sau đây có thể đòi hỏi cả mật khẩu lẫn câu hỏi bảo mật để hoàn tất xác thực?'],
    o: ['Azure Firewall', 'Application Gateway', 'Multi-Factor Authentication'],
    e: [['Multi-Factor Authentication (MFA). MFA có thể đòi hỏi từ hai yếu tố trở lên để hoàn tất xác thực.']],
  },

  343: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần kiểm soát các cổng mà thiết bị trên',
      'Internet được phép dùng để truy cập các máy ảo đó. Bạn nên dùng gì?',
    ],
    o: [
      'một network security group (NSG)',
      'một vai trò Azure Active Directory (Azure AD)',
      'một nhóm Azure Active Directory',
      'một Azure key vault',
    ],
  },

  344: {
    q: [
      'Công ty bạn dự định triển khai vài web server và vài database server lên Azure. Bạn cần',
      'khuyến nghị một giải pháp Azure để giới hạn các kiểu kết nối từ web server tới database',
      'server. Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: [
      'Azure Service Bus',
      'một local network gateway',
      'một route filter',
      'Network security group (NSG)',
    ],
  },

  345: {
    q: ['Bạn sẽ dùng dịch vụ nào sau đây để lọc lưu lượng Internet trong Azure virtual network của mình?'],
    o: ['Azure Firewall', 'Network Security Group', 'VPN Gateway'],
    e: [
      [
        'Network Security Group (NSG). NSG cho phép bạn lọc lưu lượng mạng đi tới và đi từ tài nguyên',
        'Azure trong một Azure virtual network.',
        'Một NSG có thể chứa nhiều quy tắc bảo mật cho chiều vào và chiều ra, giúp bạn lọc lưu lượng đi tới',
        'và đi từ tài nguyên theo địa chỉ IP nguồn và đích, cổng và giao thức.',
      ],
    ],
  },

  349: {
    q: [
      'Công ty “ABC Limited” muốn chạy các luồng công việc được thiết kế để tự động hoá các tình huống',
      'kinh doanh, dựng từ những khối logic có sẵn mà không phải viết mã. Dịch vụ nào phù hợp nhất?',
    ],
    o: ['Azure Functions', 'Azure Logic Apps', 'Azure Workflows', 'Azure Compute'],
  },

  350: {
    q: [
      'Bạn có một ứng dụng tại chỗ tự động gửi thông báo email dựa trên một quy tắc.',
      'Bạn dự định chuyển ứng dụng đó lên Azure. Bạn cần khuyến nghị một giải pháp tính toán serverless cho',
      'ứng dụng. Bạn nên đưa gì vào khuyến nghị?',
    ],
    o: ['Azure API', 'Azure Logic Apps', 'Azure Workflows', 'Azure Functions'],
  },

  351: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Nếu Microsoft dự định ngừng hỗ trợ một dịch vụ Azure KHÔNG có dịch vụ kế nhiệm, Microsoft',
      'sẽ báo trước ít nhất 12 tháng.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì.', '6 tháng', '90 ngày', '30 ngày'],
  },

  352: {
    q: [
      'Bạn tìm ở đâu thông tin chi tiết về dữ liệu cá nhân mà Microsoft xử lý, cách Microsoft xử lý',
      'chúng, và với mục đích gì?',
    ],
    o: ['Microsoft Privacy Statement', 'Compliance Manager', 'Azure Service Health'],
    e: [
      [
        'Microsoft Privacy Statement giải thích Microsoft xử lý dữ liệu cá nhân nào, xử lý',
        'ra sao, và vì mục đích gì.',
      ],
    ],
  },

  353: {
    q: ['Thứ nào sau đây giúp bạn bắt buộc gắn tag cho tài nguyên để quản lý việc thanh toán?'],
    o: ['Azure Policy', 'Azure Service Health', 'Compliance Manager'],
    e: [['Azure Policy dùng được để bắt buộc giá trị tag và quy tắc gắn tag trên tài nguyên.']],
  },

  354: {
    q: [
      'Thứ nào sau đây dùng để định nghĩa một bộ tài nguyên Azure lặp lại được, đáp ứng',
      'yêu cầu của tổ chức?',
    ],
    o: ['Azure Blueprint', 'Azure Policy', 'Azure Resource Group'],
    e: [
      [
        'Azure Blueprints cho phép kiến trúc sư đám mây định nghĩa một bộ tài nguyên Azure lặp lại được,',
        'hiện thực hoá và tuân thủ tiêu chuẩn, mẫu hình và yêu cầu của tổ chức. Azure Blueprint',
        'cho phép các nhóm phát triển nhanh chóng dựng và triển khai môi trường mới, yên tâm rằng',
        'mình đang làm đúng quy định của tổ chức nhờ một bộ thành phần dựng sẵn giúp tăng tốc',
        'phát triển và bàn giao.',
      ],
    ],
  },

  355: {
    q: ['Thứ nào sau đây cho phép bạn chỉ cấp cho người dùng đúng những quyền họ cần để làm việc?'],
    o: ['Azure Policy', 'Compliance Manager', 'Role-Based Access Control'],
    e: [
      [
        'Role-Based Access Control (RBAC). RBAC cho phép bạn chỉ cấp cho người dùng đúng những quyền họ cần để',
        'làm việc.',
      ],
    ],
  },

  356: {
    q: [
      'Bạn dự định triển khai 20 máy ảo lên một môi trường Azure. Để bảo đảm một máy ảo',
      'tên VM1 không kết nối được với các máy ảo khác, VM1 phải:',
    ],
    o: [
      'được triển khai vào một virtual network riêng',
      'chạy hệ điều hành khác với các máy ảo còn lại',
      'được triển khai vào một resource group riêng',
      'có hai giao diện mạng ảo',
    ],
  },

  357: {
    q: [
      'Bạn dự định triển khai vài máy ảo Azure. Bạn cần bảo đảm các dịch vụ chạy trên',
      'những máy ảo đó vẫn sẵn sàng nếu một data center gặp sự cố. Hai giải pháp khả dĩ là gì? Mỗi',
      'đáp án đúng là một lời giải trọn vẹn.',
    ],
    o: [
      'Triển khai các máy ảo vào hai availability zone trở lên.',
      'Triển khai các máy ảo vào hai resource group trở lên.',
      'Triển khai các máy ảo vào một scale set.',
      'Triển khai các máy ảo vào hai region trở lên.',
    ],
  },

  358: {
    q: ['Phát biểu nào sau đây giải thích đúng nhất về điện toán đám mây?'],
    o: [
      'Cung cấp các dịch vụ điện toán qua Internet.',
      'Tự dựng datacenter của riêng mình.',
      'Điện toán có khả năng mở rộng',
    ],
  },

  359: {
    q: ['Điều nào sau đây KHÔNG phải là đặc điểm của điện toán đám mây?'],
    o: [
      'Công nghệ mới nhất',
      'Một tập hợp dịch vụ hạn chế',
      'Tài nguyên linh hoạt',
      'Lợi thế kinh tế theo quy mô',
    ],
  },

  360: {
    q: ['Thứ nào sau đây KHÔNG phải là một mô hình điện toán đám mây?'],
    o: ['Public Cloud', 'Scalable Cloud', 'Private Cloud', 'Hybrid Cloud'],
  },

  361: {
    q: [
      'Lựa chọn nào giúp bạn vô hiệu hoá một tài khoản dễ dàng nhất khi một nhân viên rời khỏi',
      'công ty?',
    ],
    o: [
      'Bắt buộc dùng xác thực đa yếu tố (MFA)',
      'Giám sát các lần đăng nhập',
      'Dùng single sign-on (SSO)',
    ],
    e: [
      [
        'Single sign-on (SSO) tập trung hoá danh tính người dùng, nên bạn vô hiệu hoá được một tài khoản không còn hoạt động chỉ',
        'trong một bước.',
      ],
    ],
  },

  362: {
    q: ['Trường hợp nào sau đây là chỗ dùng resource lock hợp lý?'],
    o: [
      'Một mạch ExpressRoute nối ngược về mạng tại chỗ của bạn',
      'Một máy ảo không phải môi trường chạy thật, dùng để kiểm thử bản build ứng dụng thỉnh thoảng',
      'Một storage account dùng để lưu tạm ảnh được xử lý trong môi trường phát triển',
    ],
    e: [['Một mạch ExpressRoute nối ngược về mạng tại chỗ của bạn']],
  },

  363: {
    q: [
      'Cách tiếp cận nào là hiệu quả nhất để bảo đảm quy ước đặt tên được tuân thủ',
      'trên toàn subscription của bạn?',
    ],
    o: [
      'Gửi một email nêu chi tiết quy ước đặt tên rồi hy vọng mọi người làm theo.',
      'Tạo một policy chứa yêu cầu đặt tên rồi gán nó ở phạm vi subscription',
      'Cho toàn bộ người dùng khác ngoài bạn quyền chỉ đọc trên subscription. Mọi yêu cầu tạo tài nguyên đều gửi cho bạn để bạn xem lại tên được đặt, rồi bạn mới tạo chúng.',
    ],
    e: [
      [
        'Dùng Azure Policy bảo đảm bạn không chỉ khuyến nghị được một chuẩn đặt',
        'tên mà còn báo cáo được mức độ tuân thủ chuẩn đó.',
      ],
    ],
  },

  364: {
    q: ['Azure Information Protection là gì?'],
    o: [
      'AIP là giải pháp trên đám mây giúp tổ chức phân loại và (tuỳ chọn) bảo vệ tài liệu cùng email bằng cách gắn nhãn. Nhãn được gắn tự động (do quản trị viên đặt quy tắc và điều kiện), thủ công (do người dùng), hoặc kết hợp cả hai (người dùng gắn theo gợi ý).',
      'AIP là giải pháp bảo mật trên đám mây giúp nhận diện, phát hiện và điều tra các mối đe doạ nâng cao, danh tính bị xâm nhập và hành vi nội gián độc hại nhắm vào tổ chức của bạn.',
      'AIP là dịch vụ giám sát cung cấp khả năng chống mối đe doạ cho toàn bộ dịch vụ của bạn, cả trên Azure lẫn tại chỗ.',
    ],
  },

  365: {
    q: [
      'Môi trường Azure của bạn có nhiều máy ảo. Bạn cần bảo đảm một máy ảo tên VM1 truy cập được',
      'từ Internet qua HTTP.',
      'Hai giải pháp khả dĩ là gì?',
    ],
    o: [
      'Sửa một Azure Traffic Manager profile',
      'Sửa một network security group (NSG)',
      'Sửa một DDoS protection plan',
      'Sửa một Azure firewall',
    ],
  },
};
