/**
 * Bản dịch tiếng Việt cho câu 236–300 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  236: {
    q: [
      'Công ty bạn cần triển khai và quản lý vài Microsoft Azure Web app bằng tài nguyên Azure App',
      'Service.',
      'Bạn sẽ dùng URL nào sau đây để quản lý các Azure Web App đó?',
    ],
    o: [
      'https://portal.microsoft.com',
      'https://portal.azure.com',
      'https://portal.azurewebsites.net',
      'https://portal.azurewebsites.com',
    ],
  },

  238: {
    q: [
      'Một công ty cần tạo khoảng 50 máy ảo tuỳ biến. Trong đó 20 máy chạy Windows',
      'và 30 máy chạy Ubuntu.',
      'Lựa chọn nào giúp giảm công sức quản trị khi triển khai số máy đó?',
    ],
    o: ['Azure Load Balancer', 'Azure Web Apps', 'Azure Traffic Manager', 'Azure Scale Sets'],
  },

  239: {
    q: [
      'Từ Azure Monitor, bạn xem được ai đã tắt một máy ảo cụ thể trong vòng 14 ngày',
      'gần nhất.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Azure Event Hubs', 'Azure Activity Log', 'Azure Service Health'],
  },

  240: {
    q: [
      'Bạn dự định triển khai một giải pháp cơ sở dữ liệu trên Azure. Bạn cần một giải pháp',
      'đáp ứng các yêu cầu sau:',
      '-> Có thể nhận dữ liệu đồng thời từ nhiều region',
      '-> Có thể lưu tài liệu JSON',
      'Bạn nên triển khai dịch vụ cơ sở dữ liệu nào?',
    ],
    o: [
      'Azure SQL Database',
      'Azure Database for PostgreSQL',
      'Azure Database for MariaDB',
      'Azure Cosmos DB',
    ],
  },

  241: {
    q: [
      'Bạn dự định map một ổ đĩa mạng từ vài máy chạy Windows 10 tới Azure Storage. Bạn',
      'cần tạo một giải pháp lưu trữ trên Azure cho ổ đĩa map dự kiến đó. Bạn nên tạo gì?',
    ],
    o: [
      'Một blob storage trong storage account',
      'Một table trong storage account',
      'Một dịch vụ Files trong storage account',
    ],
  },

  242: {
    q: [
      'Bạn dự định triển khai một website lên Azure. Website sẽ được người dùng khắp thế giới truy cập và chứa',
      'các file video lớn. Bạn cần khuyến nghị tính năng Azure nào để mang lại trải nghiệm phát video',
      'tốt nhất. Bạn nên khuyến nghị gì?',
    ],
    o: ['Azure Region', 'Content delivery network (CDN)', 'Azure Cache'],
  },

  243: {
    q: [
      'Một công ty có một nhóm máy ảo (VM) trên Microsoft Azure. Một trong số đó bị ngừng',
      'do sự cố của hạ tầng Azure bên dưới. Máy chủ ngừng hoạt động trong thời gian dài',
      'và vi phạm SLA tiêu chuẩn mà Microsoft công bố.',
      'Microsoft sẽ bồi hoàn chi phí cho thời gian ngừng đó bằng cách nào?',
    ],
    o: [
      'Chuyển tiền trực tiếp vào tài khoản ngân hàng của khách hàng',
      'Dựng thêm một máy ảo miễn phí cho khách hàng',
      'Cấp service credit cho khách hàng',
      'Cung cấp một dịch vụ miễn phí để dùng trong một khoảng thời gian nhất định.',
    ],
  },

  244: {
    q: [
      'Công ty bạn có một mạng tại chỗ gồm nhiều máy chủ.',
      'Công ty dự định giảm bớt các trách nhiệm quản trị sau đây của quản trị viên mạng:',
      'a)',
      'Sao lưu dữ liệu ứng dụng',
      'b)',
      'Thay thế phần cứng máy chủ bị hỏng',
      'c)',
      'Quản lý an ninh vật lý của máy chủ',
      'd)',
      'Cập nhật hệ điều hành máy chủ',
      'e)',
      'Quản lý quyền truy cập tài liệu dùng chung',
      'Công ty dự định chuyển vài máy chủ sang máy ảo Azure. Bạn cần xác định những',
      'trách nhiệm quản trị nào sẽ được loại bỏ sau khi chuyển đổi.',
      'Bạn nên chọn hai trách nhiệm nào?',
    ],
    o: [
      'Quản lý an ninh vật lý của máy chủ',
      'Cập nhật hệ điều hành máy chủ',
      'Quản lý quyền truy cập tài liệu dùng chung',
      'Sao lưu dữ liệu ứng dụng',
      'Thay thế phần cứng máy chủ bị hỏng',
    ],
  },

  245: {
    q: ['Khả năng của một hệ thống tự co giãn theo nhu cầu được gọi là:'],
    o: ['Agility', 'Elasticity', 'Extendibility'],
    e: [
      [
        'Hệ thống có tính elastic nghĩa là nó điều chỉnh được năng lực xử lý cho khớp với',
        'nhu cầu. Tức là hệ thống cấp phát và thu hồi tài nguyên một cách',
        'linh động.',
      ],
    ],
  },

  246: {
    q: [
      'Một công ty dự định chuyển sang Microsoft Azure.',
      'Ban lãnh đạo muốn nắm được chi phí sẽ phát sinh nếu quyết định đặt tài nguyên',
      'trên Azure.',
      'Giải pháp: Bạn khuyến nghị dùng Azure Cost Management để có được ước tính chi phí tài nguyên.',
      'Khuyến nghị này có phù hợp với yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  247: {
    q: [
      'Một công ty dự định chuyển sang Microsoft Azure.',
      'Ban lãnh đạo muốn nắm được chi phí sẽ phát sinh nếu quyết định đặt tài nguyên',
      'trên Azure.',
      'Giải pháp: Bạn khuyến nghị dùng dịch vụ Cloudyn để có được ước tính chi phí tài nguyên.',
      'Khuyến nghị này có phù hợp với yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  248: {
    q: [
      'Một công ty dự định chuyển sang Microsoft Azure.',
      'Ban lãnh đạo muốn nắm được chi phí sẽ phát sinh nếu quyết định đặt tài nguyên',
      'trên Azure.',
      'Giải pháp: Bạn khuyến nghị dùng Total Cost of Ownership (TCO) Calculator.',
      'Khuyến nghị này có phù hợp với yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Cost Management + Billing giúp bạn hiểu hoá đơn Azure của mình, quản lý',
        'tài khoản thanh toán và các subscription',
      ],
      [
        'Azure Total Cost of Ownership (TCO) Calculator dùng để ước tính khoản tiết kiệm chi phí',
        'bạn đạt được khi chuyển khối lượng công việc của ứng dụng sang Microsoft.',
      ],
    ],
  },

  249: {
    q: [
      'Công ty bạn có một website đang bị kẻ tấn công doạ đánh sập bằng cách gửi',
      'lượng lớn lưu lượng mạng tới máy chủ. Dịch vụ Azure nào giúp công ty bạn bảo vệ',
      'App Service khỏi kiểu tấn công này?',
    ],
    o: ['Azure Policy', 'Azure Firewall', 'Azure DDoS Protection', 'Network security groups'],
  },

  250: {
    q: [
      'Khi triển khai cùng với web application firewall (WAF), Azure DDoS Protection bảo vệ ở cả',
      'tầng mạng lẫn tầng ứng dụng.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Tầng mạng (Layer 3 và 4, do Azure DDoS Protection đảm nhiệm) và tầng',
        'ứng dụng (Layer 7, do WAF đảm nhiệm)',
      ],
    ],
  },

  251: {
    q: ['Log trong Azure Monitor được lưu ở dịch vụ nào sau đây?'],
    o: ['Log Analytics workspace', 'Azure Event Hubs', 'Azure Stream', 'Azure Cosmos DB'],
  },

  252: {
    q: [
      'Azure File Sync cho phép gom các file share của tổ chức về Azure Files, đồng thời vẫn giữ được',
      'sự linh hoạt, hiệu năng và khả năng tương thích của một Windows file server.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  253: {
    q: ['Archive access tier được đặt ở cấp storage account.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  254: {
    q: ['Hot access tier được khuyến nghị cho dữ liệu được truy cập và chỉnh sửa thường xuyên.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  255: {
    q: ['Cool access tier được khuyến nghị cho các bản sao lưu dài hạn.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  256: {
    q: [
      'Để đọc một blob đang nằm ở archive tier, trước hết bạn phải rehydrate blob đó về một tầng trực tuyến (hot hoặc',
      'cool).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  257: {
    q: ['Archive tier cho mức sẵn sàng 99,99%.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  258: {
    q: [
      'Premium blob storage cho phép truy cập block blob và append blob với độ trễ thấp và ổn định,',
      'giá được tối ưu cho các tình huống có số giao dịch lớn.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  259: {
    q: [
      'Bạn có nhiều máy ảo (VM) xử lý từng đơn hàng đến từ một ứng dụng web chạy website.',
      'Các máy ảo này nằm trong một Azure virtual network, nhưng chúng cần truy cập Internet.',
      'Cách tốt nhất để giới hạn toàn bộ lưu lượng đi ra từ máy ảo chỉ tới những host đã biết là gì?',
    ],
    o: [
      'Cấu hình Azure DDoS Protection để giới hạn truy cập mạng tới các cổng và host tin cậy.',
      'Tạo application rule trong Azure Firewall.',
      'Bảo đảm mọi ứng dụng đang chạy chỉ giao tiếp với các cổng và host tin cậy.',
    ],
  },

  260: {
    q: ['Azure AD có thể lưu log vào Azure Monitor.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  261: {
    q: ['Bạn có thể tích hợp domain Active Directory tại chỗ với Azure Active Directory.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  262: {
    q: [
      'Bạn có nhiều máy ảo trong một Azure virtual network. Bạn muốn áp dụng chính sách mặc định là từ chối',
      'để các máy ảo không kết nối được với nhau. Cách tốt nhất để làm việc đó là gì?',
    ],
    o: [
      'Cấu hình Azure DDoS Protection để giới hạn truy cập mạng tới các cổng và host tin cậy.',
      'Tạo application rule trong Azure Firewall.',
      'Bảo đảm mọi ứng dụng đang chạy chỉ giao tiếp với các cổng và host tin cậy.',
    ],
  },

  263: {
    q: ['Azure Site Recovery cung cấp __________________ cho máy ảo.'],
    o: ['faulty tolerance', 'disaster recovery', 'elasticity', 'high availability'],
  },

  264: {
    q: [
      'Resource group cho phép tổ chức quản lý mức độ tuân thủ của tài nguyên Azure',
      'trải trên nhiều subscription.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Management groups', 'Azure policies', 'Azure App Service plans'],
  },

  265: {
    q: ['Công cụ nào cho phép người dùng xác thực vào nhiều ứng dụng bằng single sign-on (SSO)?'],
    o: ['Azure resource group', 'Azure Active Directory (Azure AD)', 'Azure advisor', 'Azure monitor'],
  },

  269: {
    q: [
      'Cấp trên thông báo cho bạn rằng công ty dự định tự động hoá việc triển khai máy chủ',
      'lên Azure. Tuy nhiên có lo ngại rằng thông tin đăng nhập quản trị có thể bị lộ',
      'trong quá trình này.',
      'Bạn phải bảo đảm trong lúc triển khai, thông tin đăng nhập quản trị được mã hoá',
      'bằng một giải pháp Azure phù hợp.',
      'Giải pháp: Bạn khuyến nghị dùng Azure Information Protection.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  270: {
    q: [
      'Cấp trên thông báo cho bạn rằng công ty dự định tự động hoá việc triển khai máy chủ',
      'lên Azure. Tuy nhiên có lo ngại rằng thông tin đăng nhập quản trị có thể bị lộ',
      'trong quá trình này.',
      'Bạn phải bảo đảm trong lúc triển khai, thông tin đăng nhập quản trị được mã hoá',
      'bằng một giải pháp Azure phù hợp.',
      'Giải pháp: Bạn khuyến nghị dùng Azure Multi-Factor Authentication (MFA).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  271: {
    q: [
      'Cấp trên thông báo cho bạn rằng công ty dự định tự động hoá việc triển khai máy chủ',
      'lên Azure. Tuy nhiên có lo ngại rằng thông tin đăng nhập quản trị có thể bị lộ',
      'trong quá trình này.',
      'Bạn phải bảo đảm trong lúc triển khai, thông tin đăng nhập quản trị được mã hoá',
      'bằng một giải pháp Azure phù hợp.',
      'Giải pháp: Bạn khuyến nghị dùng Azure Key Vault.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  274: {
    q: [
      'Hạ tầng của công ty bạn gồm nhiều đơn vị kinh doanh, mỗi đơn vị cần rất nhiều',
      'tài nguyên Azure khác nhau cho hoạt động hằng ngày. Tài nguyên mà mỗi đơn vị cần là giống hệt nhau.',
      'Bạn được yêu cầu phê duyệt một chiến lược để tạo tài nguyên Azure một cách tự động.',
      'Giải pháp: Bạn khuyến nghị đưa dịch vụ Azure API Management vào chiến lược.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure API Management Service (APIM) là cách để tạo và quản lý',
        'API cho khách hàng dựa trên các dịch vụ backend sẵn có.',
      ],
    ],
  },

  275: {
    q: [
      'Hạ tầng của công ty bạn gồm nhiều đơn vị kinh doanh, mỗi đơn vị cần rất nhiều',
      'tài nguyên Azure khác nhau cho hoạt động hằng ngày. Tài nguyên mà mỗi đơn vị cần là giống hệt nhau.',
      'Bạn được yêu cầu phê duyệt một chiến lược để tạo tài nguyên Azure một cách tự động.',
      'Giải pháp: Bạn khuyến nghị đưa management group vào chiến lược.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure management group hỗ trợ Azure role-based access control',
        '(Azure RBAC) cho mọi truy cập tài nguyên và mọi định nghĩa vai trò.',
      ],
    ],
  },

  277: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ máy ảo sang một subscription Azure kiểu pay-as-you-go.',
      'Các máy ảo hiện đặt trên các máy chủ Hyper-V trong một data center.',
      'Bạn phải bảo đảm giải pháp Azure dự kiến dùng đúng mô hình chi phí.',
      'Giải pháp: Bạn nên khuyến nghị dùng mô hình chi phí elastic.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  278: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ máy ảo sang một subscription Azure kiểu pay-as-you-go.',
      'Các máy ảo hiện đặt trên các máy chủ Hyper-V trong một data center.',
      'Bạn phải bảo đảm giải pháp Azure dự kiến dùng đúng mô hình chi phí.',
      'Giải pháp: Bạn nên khuyến nghị dùng mô hình chi phí scalable.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  279: {
    q: [
      'Công ty bạn dự định chuyển toàn bộ máy ảo sang một subscription Azure kiểu pay-as-you-go.',
      'Các máy ảo hiện đặt trên các máy chủ Hyper-V trong một data center.',
      'Bạn phải bảo đảm giải pháp Azure dự kiến dùng đúng mô hình chi phí.',
      'Giải pháp: Bạn nên khuyến nghị dùng mô hình chi phí operational.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  280: {
    q: [
      'Rừng Active Directory của công ty bạn có hàng nghìn tài khoản người dùng. Bạn được',
      'thông báo rằng toàn bộ tài nguyên mạng sẽ được chuyển lên Azure. Sau đó data center tại chỗ sẽ',
      'ngừng hoạt động.',
      'Bạn phải áp dụng một chiến lược giảm thiểu ảnh hưởng tới người dùng sau khi việc chuyển đổi',
      'hoàn tất.',
      'Giải pháp: Bạn dự định bắt buộc dùng Azure Multi-Factor Authentication (MFA).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  282: {
    q: [
      'Bạn đang lập kế hoạch chuyển một công ty lên Azure. Mỗi bộ phận trong số rất nhiều bộ phận của công ty sẽ',
      'có một quản trị viên phụ trách quản lý tài nguyên Azure mà bộ phận đó dùng.',
      'Bạn muốn bảo đảm cách triển khai Azure cho phép phân tách Azure theo từng bộ phận, đồng thời',
      'giữ công sức quản trị ở mức tối thiểu.',
      'Giải pháp: Bạn dự định dùng nhiều thư mục Azure Active Directory (Azure AD).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  283: {
    q: [
      'Bạn đang lập kế hoạch chuyển một công ty lên Azure. Mỗi bộ phận trong số rất nhiều bộ phận của công ty sẽ',
      'có một quản trị viên phụ trách quản lý tài nguyên Azure mà bộ phận đó dùng.',
      'Bạn muốn bảo đảm cách triển khai Azure cho phép phân tách Azure theo từng bộ phận, đồng thời',
      'giữ công sức quản trị ở mức tối thiểu.',
      'Giải pháp: Bạn dự định dùng Azure Resource Manager.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  284: {
    q: [
      'Công ty bạn có một môi trường Azure Active Directory (Azure AD). Người dùng thỉnh thoảng kết nối tới',
      'Azure AD qua Internet.',
      'Bạn được giao bảo đảm rằng người dùng kết nối tới Azure AD qua Internet từ một địa chỉ IP',
      'không xác định sẽ tự động được yêu cầu đổi mật khẩu.',
      'Giải pháp: Bạn cấu hình dùng Azure AD Privileged Identity Management.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  285: {
    q: [
      'Công ty bạn có một môi trường Azure Active Directory (Azure AD). Người dùng thỉnh thoảng kết nối tới',
      'Azure AD qua Internet.',
      'Bạn được giao bảo đảm rằng người dùng kết nối tới Azure AD qua Internet từ một địa chỉ IP',
      'không xác định sẽ tự động được yêu cầu đổi mật khẩu.',
      'Giải pháp: Bạn cấu hình dùng Azure AD Identity Protection.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  286: {
    q: ['Dịch vụ Azure Blueprints được thiết kế để cung cấp __________________'],
    o: [
      'Kho tập trung các mẫu thiết kế đã được duyệt để quản lý môi trường Azure một cách hiệu quả',
      'kho chứa ARM template',
      'kho chứa resource group, policy, role assignment',
    ],
    e: [
      [
        'Azure blueprint là một bộ tiêu chuẩn và yêu cầu để cấu hình việc triển khai các dịch vụ',
        'Azure — bằng cách thiết lập những bộ quy tắc, quy ước hoặc thiết kế cụ thể có thể tái sử dụng.',
      ],
    ],
  },

  287: {
    q: ['Những loại thành phần Azure nào sau đây có thể nằm trong một định nghĩa Azure Blueprint?'],
    o: [
      'Azure Resource Manager Template',
      'Azure Role Definition',
      'Azure Role Assignment',
      'Azure Cloud Shell',
      'Azure Resource group',
      'Azure RBAC',
      'Azure subscription',
      'Azure Policy Assignment',
    ],
  },

  288: {
    q: ['Tài khoản của bạn cần những quyền nào để tạo được một Azure Blueprint?'],
    o: [
      'Microsoft.Blueprint/blueprints/write',
      'Microsoft.Blueprint/blueprints/policy/write',
      'Microsoft.Blueprint/blueprints/artifacts/write',
      'Microsoft.Blueprint/blueprints/role/write',
      'Microsoft.Blueprint/blueprints/versions/write',
    ],
    e: [
      [
        'Microsoft.Blueprint/blueprints/write — tạo một định nghĩa blueprint',
        'Microsoft.Blueprint/blueprints/artifacts/write — tạo artifact trên một định nghĩa blueprint',
        'Microsoft.Blueprint/blueprints/versions/write — phát hành một blueprint',
      ],
    ],
  },

  289: {
    q: ['Vai trò dựng sẵn nào quản lý được định nghĩa blueprint nhưng không gán được chúng?'],
    o: ['Owner', 'Contributor', 'Blueprint Contributor', 'Blueprint Operator'],
  },

  290: {
    q: ['Azure Blueprints và Azure ARM Template là một, không khác gì nhau?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  291: {
    q: ['Chọn những cách khả dĩ để tạo Azure Blueprint.'],
    o: ['Azure portal', 'Azure PowerShell', 'Azure CLI', 'Azure REST API', 'Azure template'],
  },

  292: {
    q: ['Azure Blueprint được lưu ở máy cục bộ hoặc trong hệ thống quản lý mã nguồn.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  293: {
    q: ['Mỗi blueprint có thể gồm không hoặc nhiều artifact dạng ARM template.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  294: {
    q: ['Một policy có thể được đưa vào làm một trong nhiều artifact của một định nghĩa blueprint.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  295: {
    q: ['Bạn chỉ gán được một định nghĩa Blueprint đúng một lần cho một subscription Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  297: {
    q: [
      'Bạn đang lập một chiến lược triển khai rất nhiều web server và database server lên Azure.',
      'Chiến lược này phải cho phép kiểm soát các kiểu kết nối giữa web server và database server.',
      'Giải pháp: Bạn dự định bắt buộc dùng Azure Multi-Factor Authentication (MFA).',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  298: {
    q: [
      'Bạn đang lập một chiến lược triển khai rất nhiều web server và database server lên Azure.',
      'Chiến lược này phải cho phép kiểm soát các kiểu kết nối giữa web server và database server.',
      'Giải pháp: Bạn đưa một local network gateway vào chiến lược.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  299: {
    q: [
      'Bạn đang lập một chiến lược triển khai rất nhiều web server và database server lên Azure.',
      'Chiến lược này phải cho phép kiểm soát các kiểu kết nối giữa web server và database server.',
      'Giải pháp: Bạn đưa network security group (NSG) vào chiến lược.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  300: {
    q: [
      'Khi cần uỷ quyền cho nhiều máy ảo Azure cùng lúc, bạn phải triển khai các máy ảo Azure đó',
    ],
    o: [
      'vào cùng một Azure region',
      'bằng cùng một Azure Resource Manager template',
      'vào cùng một Azure Resource Group',
      'vào cùng một availability zone',
    ],
  },
};
