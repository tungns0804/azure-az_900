/**
 * Bản dịch tiếng Việt cho câu 641–710 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  641: {
    q: [
      'Một công ty muốn triển khai một dịch vụ giải pháp IoT có sẵn trên Microsoft Azure.',
      'Thứ nào sau đây đáp ứng yêu cầu dưới đây?',
      '“Giám sát và điều khiển hàng triệu thiết bị Internet of Things (IoT)”.',
    ],
    o: [
      'IoT Hub',
      'IoT Central',
      'IoT Edge',
      'Azure Time Series Insights — Vì IoT Hub là dịch vụ có quản lý, chạy trên đám mây, đóng vai trò trung tâm điều phối tin nhắn',
    ],
    e: [
      [
        'cho việc liên lạc hai chiều giữa ứng dụng IoT của bạn và các thiết bị mà nó quản lý.',
        'Bạn dùng Azure IoT Hub để dựng giải pháp IoT với liên lạc tin cậy và an toàn',
        'giữa hàng triệu thiết bị IoT và một backend chạy trên đám mây. Bạn kết nối được gần như',
        'mọi thiết bị vào IoT Hub.',
      ],
    ],
  },

  642: {
    q: [
      'Một công ty muốn triển khai một dịch vụ giải pháp IoT có sẵn trên Microsoft Azure.',
      'Thứ nào sau đây đáp ứng yêu cầu dưới đây?',
      '“Dùng để phân tích dữ liệu ngay trên thiết bị đầu cuối”.',
    ],
    o: ['IoT Hub', 'IoT Central', 'IoT Edge', 'Azure Time Series Insights'],
  },

  643: {
    q: [
      'Một công ty muốn triển khai một dịch vụ giải pháp IoT có sẵn trên Microsoft Azure.',
      'Thứ nào sau đây đáp ứng yêu cầu dưới đây?',
      '“Cung cấp giải pháp aPaaS (application platform as a service) có quản lý hoàn toàn, giúp dễ dàng kết nối,',
      'giám sát và quản lý thiết bị IoT ở quy mô lớn”.',
    ],
    o: ['IoT Hub', 'IoT Central', 'IoT Edge', 'Azure Time Series Insights'],
  },

  645: {
    q: [
      'Một công ty dự định chạy 2 máy ảo trên Azure như sau:',
      'Tên máy ảo',
      'Cỡ máy ảo',
      'demo-vm-1',
      'B1S',
      'demo-vm-2',
      'B1S',
      'Khi máy ảo demo-vm-1 bị dừng, bạn vẫn phải trả chi phí cho phần lưu trữ gắn với máy',
      'ảo đó, đúng không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Vì Azure vẫn tính tiền giờ CPU của máy ảo khi nó ở trạng thái Stopped nhưng chưa',
        'Deallocated, dựa trên cỡ máy ảo và image bạn chọn để tạo',
        'nó. Bạn vẫn tiếp tục bị tính phí cho cloud service của máy ảo và phần lưu trữ',
        'cần cho ổ đĩa hệ điều hành cùng mọi ổ đĩa dữ liệu gắn kèm. Ổ đĩa tạm (scratch)',
        'trên máy ảo thì miễn phí.',
      ],
    ],
  },

  646: {
    q: ['Site-to-Site VPN có chức năng gì?'],
    o: [
      'cung cấp kết nối an toàn giữa một máy tính trên mạng công cộng và mạng doanh nghiệp',
      'cung cấp kết nối riêng chuyên dụng tới Azure, KHÔNG đi qua Internet',
      'cung cấp kết nối từ một thiết bị VPN tại chỗ tới một Azure VPN gateway',
    ],
  },

  647: {
    q: [
      'Mô tả “cung cấp kết nối riêng chuyên dụng tới Azure, KHÔNG đi qua Internet” ám chỉ',
      'lựa chọn nào?',
    ],
    o: ['Site to Site VPN', 'Point to Site VPN', 'ExpressRoute', 'VNET'],
  },

  648: {
    q: [
      'Mô tả “cung cấp kết nối an toàn giữa một máy tính trên mạng công cộng và mạng doanh nghiệp”',
      'ám chỉ lựa chọn nào?',
    ],
    o: ['Site to Site VPN', 'Point to Site VPN', 'ExpressRoute', 'VNET'],
  },

  649: {
    q: [
      'Một công ty dự định chạy một ứng dụng trên một nhóm máy ảo trên Azure. Họ muốn',
      'bảo đảm ứng dụng phục hồi được sau sự cố toàn region trên Azure. Khái niệm nào sau đây',
      'cần được cân nhắc để đáp ứng yêu cầu này?',
    ],
    o: ['Scalability', 'Disaster Recovery', 'Agility', 'Elasticity'],
  },

  650: {
    q: [
      'Một kỹ sư CNTT cần tạo một máy ảo trên Azure. Hiện kỹ sư này có một máy tính để bàn chạy',
      'Windows cùng với Azure Command Line Interface (CLI).',
      'Thứ nào sau đây cho phép kỹ sư đó dùng Azure Command Line Interface?',
      'Chọn 2 đáp án trong các phương án dưới đây.',
    ],
    o: ['PowerShell', 'File and Print Explorer', 'Command Prompt', 'Control Panel'],
  },

  651: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Azure. Giải pháp có yêu cầu then',
      'chốt sau: Cho phép chạy dịch vụ phân tích dữ liệu lớn phục vụ machine learning.',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Databricks', 'Azure Logic Apps', 'Azure App Service', 'Azure Application Insights'],
  },

  652: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Microsoft Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Một giải pháp tích hợp để triển khai mã nguồn',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Advisor', 'Azure Cognitive Services', 'Azure Application Insights', 'Azure DevOps'],
  },

  653: {
    q: [
      'Một công ty đang dự định triển khai tài nguyên lên Azure. Họ muốn có khả năng',
      'quản lý quyền truy cập tài nguyên của người dùng trải trên nhiều subscription.',
      'Thứ nào sau đây giúp bạn đạt được yêu cầu này?',
    ],
    o: ['Resource Groups', 'Management Groups', 'Azure Policies', 'Azure App Service'],
  },

  654: {
    q: [
      'Một công ty dự định chạy giải pháp trên Microsoft Azure Cloud. Họ cần',
      'triển khai MFA cho các danh tính đặt trên Microsoft Azure.',
      'Có bắt buộc phải triển khai một giải pháp federation hoặc đồng bộ danh tính tại chỗ lên đám mây không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  655: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Azure. Giải pháp có yêu cầu then',
      'chốt sau: Cung cấp một dịch vụ đám mây giúp biến đổi dữ liệu và rút ra những thông tin giá trị từ chính',
      'dữ liệu đó.',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: [
      'Azure Data Lake Analytics',
      'Azure Virtual Machine Scale Sets',
      'Azure Virtual Network',
      'Azure App Service',
    ],
  },

  656: {
    q: [
      'Một công ty muốn lưu một nhóm bảng dữ liệu trên Microsoft Azure. Họ muốn hoàn toàn không phải',
      'quản trị hạ tầng bên dưới và cần truy cập dữ liệu với độ trễ thấp.',
      'Bạn khuyến nghị dùng dịch vụ Azure App Service.',
      'Khuyến nghị này có đáp ứng yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Vì Azure App Service cho phép bạn xây dựng và chạy ứng dụng web, backend cho ứng dụng di động và',
        'RESTful API bằng ngôn ngữ lập trình bạn chọn mà không phải quản lý hạ tầng.',
      ],
    ],
  },

  657: {
    q: [
      'Một công ty muốn lưu một nhóm bảng dữ liệu trên Microsoft Azure. Họ muốn hoàn toàn không phải',
      'quản trị hạ tầng bên dưới và cần truy cập dữ liệu với độ trễ thấp.',
      'Bạn khuyến nghị dùng dịch vụ SQL Database.',
      'Khuyến nghị này có đáp ứng yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dù đây là dịch vụ platform as a service và Microsoft lo toàn bộ việc vá lỗi cùng cập nhật cho SQL',
        'và mã hệ điều hành.',
      ],
    ],
  },

  658: {
    q: [
      'Một công ty muốn lưu một nhóm bảng dữ liệu trên Microsoft Azure. Họ muốn hoàn toàn không phải',
      'quản trị hạ tầng bên dưới và cần truy cập dữ liệu với độ trễ thấp.',
      'Bạn khuyến nghị dùng dịch vụ Cosmos DB.',
      'Khuyến nghị này có đáp ứng yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Cosmos DB là dịch vụ cơ sở dữ liệu đa mô hình, phân tán toàn cầu của Microsoft. Chỉ với một cú',
        'nhấp chuột, Cosmos DB cho phép bạn mở rộng thông lượng và dung lượng một cách linh hoạt và độc lập',
        'qua bất kỳ số region Azure nào trên thế giới.',
      ],
    ],
  },

  659: {
    q: [
      'Một công ty có một máy ảo tạo trong subscription của họ. Một ứng dụng được cài trên',
      'máy ảo đó. Bạn cần bảo đảm lưu lượng vào được máy ảo qua cổng 8080.',
      'Bạn phải sửa thứ nào sau đây để việc này hoạt động?',
    ],
    o: ['Network Interface Card', 'Network Security Group', 'Route Tables', 'Route Filters'],
  },

  660: {
    q: [
      'Một công ty dự định chạy một nhóm tài nguyên trên Microsoft Azure. Họ muốn bảo vệ',
      'tài nguyên khỏi tấn công DDoS và cũng muốn có số liệu tấn công theo thời gian thực.',
      'Công ty nên chọn thứ nào sau đây để đáp ứng yêu cầu này?',
    ],
    o: [
      'DDoS Protection Basic',
      'DDoS Protection Standard',
      'DDoS Protection Premium',
      'DDoS Protection Isolated — DDoS Standard Protection cung cấp thêm khả năng giảm thiểu tấn công so với bậc Basic,',
    ],
    e: [
      [
        'được tinh chỉnh riêng cho tài nguyên trong Azure Virtual Network. DDoS Protection Standard rất dễ',
        'bật và không đòi hỏi thay đổi gì ở ứng dụng.',
      ],
    ],
  },

  661: {
    q: [
      'Một công ty dự định triển khai tài nguyên vào một Resource Group (RG) trên Microsoft Azure.',
      'Công ty dự định gán tag cho các Resource Group đó.',
      'Các tài nguyên bên trong Resource Group (RG) có kế thừa cùng những tag đó không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Tài nguyên trong Resource Group (RG) không kế thừa các tag đó.']],
  },

  662: {
    q: [
      'Một công ty dự định triển khai tài nguyên vào một Resource Group (RG) trên Microsoft Azure.',
      'Công ty dự định gán quyền cho Resource Group (RG) đó.',
      'Các tài nguyên bên trong Resource Group (RG) có kế thừa cùng những quyền đó không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Tài nguyên trong Resource Group (RG) có kế thừa cùng những quyền đó.']],
  },

  663: {
    q: ['Cây management group hỗ trợ tối đa _____ tầng.'],
    o: ['2', '4', '6', '8'],
  },

  664: {
    q: ['Một directory hỗ trợ tối đa bao nhiêu management group?'],
    o: ['100', '1000', '10000', '100000'],
  },

  665: {
    q: ['Mỗi management group và mỗi subscription chỉ có đúng một cha (parent).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  666: {
    q: [
      'Một công ty dự định dựng một giải pháp trên nền tảng Azure. Giải pháp có yêu cầu',
      'then chốt sau: Cung cấp một dịch vụ có quản lý dùng để quản lý và mở rộng các ứng dụng chạy trên',
      'container.',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Event Grid', 'Azure DevOps', 'Azure Kubernetes', 'Azure DevTest Labs'],
  },

  669: {
    q: ['Thuê phần mềm là ví dụ của chi phí vận hành (OpEx).'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'OpEx là chi phí thường xuyên (chi phí vận hành), ví dụ thuê phần mềm. Nếu bạn mua đứt phần mềm',
        'một lần thì đó là CapEx, nhưng thuê phần mềm là chi phí lặp lại nên là OpEx.',
      ],
      ['Đính chính cho câu 120 ở Part 7'],
    ],
  },

  670: {
    q: ['Một công ty đang thuê phần mềm. Khoản chi này thuộc nhóm nào?'],
    o: [
      'Primary Expenditure',
      'Capital Expenditure',
      'Secondary Expenditure',
      'Operating/Operational Expenditure',
    ],
  },

  671: {
    q: ['Điều nào sau đây là đúng với SaaS (Software as a Service)?'],
    o: [
      'Bạn chịu trách nhiệm về khả năng mở rộng của giải pháp',
      'Bạn chịu trách nhiệm triển khai giải pháp',
      'Bạn chịu trách nhiệm cấu hình giải pháp',
      'Bạn chịu trách nhiệm về tính sẵn sàng cao của giải pháp',
    ],
  },

  672: {
    q: ['Một máy ảo Azure bắt buộc phải có thêm những tài nguyên phụ thuộc nào? (Chọn HAI)'],
    o: ['Public IP', 'Azure Virtual Network', 'Data Disk', 'NIC Card'],
    e: [
      [
        'Giống như một máy tính vật lý, máy ảo Azure cần có mạng, NIC Card, ổ đĩa hệ điều hành và resource group',
        'thì mới hoạt động được.',
      ],
    ],
  },

  673: {
    q: [
      'Một công ty muốn chuyển một số script lên Microsoft Azure. Họ muốn tận dụng',
      'các tính năng serverless có sẵn trên Azure.',
      'Giải pháp: Họ quyết định dùng dịch vụ Azure Virtual Machine.',
      'Dịch vụ này có đáp ứng yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Máy ảo Azure cho bạn sự linh hoạt của ảo hoá mà không phải mua và bảo trì phần cứng',
        'vật lý chạy nó.',
        'Tuy nhiên bạn vẫn phải bảo trì máy ảo bằng các việc như cấu hình, vá lỗi và',
        'cài đặt phần mềm chạy trên đó.',
      ],
    ],
  },

  674: {
    q: [
      'Một công ty muốn chuyển một số script lên Microsoft Azure. Họ muốn tận dụng',
      'các tính năng serverless có sẵn trên Azure.',
      'Giải pháp: Họ quyết định dùng dịch vụ Azure Functions.',
      'Dịch vụ này có đáp ứng yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Functions là dịch vụ compute serverless cho phép bạn chạy mã kích hoạt theo sự kiện mà không',
        'phải cấp phát hay quản lý hạ tầng một cách tường minh.',
      ],
    ],
  },

  675: {
    q: [
      'Một công ty muốn chuyển một số script lên Microsoft Azure. Họ muốn tận dụng',
      'các tính năng serverless có sẵn trên Azure.',
      'Giải pháp: Họ quyết định dùng dịch vụ Azure Content Delivery Network.',
      'Dịch vụ này có đáp ứng yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Content delivery network (CDN) là mạng máy chủ phân tán, giúp phân phối nội dung web',
        'tới người dùng một cách hiệu quả.',
        'CDN lưu nội dung đã cache trên các máy chủ biên đặt tại những điểm hiện diện (POP) gần',
        'người dùng cuối, nhằm giảm thiểu độ trễ.',
      ],
    ],
  },

  676: {
    q: ['Cool Access tier có phải lựa chọn tốt cho sao lưu dài hạn không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Archive access tier mới là lựa chọn tốt nhất cho sao lưu dài hạn. Dữ liệu ở tầng Archive nên được giữ tối thiểu',
        '180 ngày.',
        'Cool Access Tier có thời hạn tối thiểu 30 ngày.',
      ],
    ],
  },

  677: {
    q: ['Giới hạn dung lượng lưu trữ của Azure được đặt ở cấp account, đúng không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Giới hạn dung lượng lưu trữ của Azure được đặt ở cấp account, chứ không theo từng tầng truy cập. Bạn',
        'có thể dùng hết dung lượng ở một tầng, hoặc phân bổ dung lượng qua hai',
        'tầng trở lên.',
      ],
    ],
  },

  678: {
    q: [
      'Loại blob nào trong Azure Storage là lý tưởng để lưu file văn bản hoặc nhị phân, và để',
      'tải lên các file lớn?',
    ],
    o: ['Block Blobs', 'Append Blobs', 'Page blobs.'],
  },

  679: {
    q: [
      'Một công ty muốn cấp phát một giải pháp trên Microsoft Azure với các yêu cầu sau:',
      'Cấp phát một giải pháp WordPress',
      '•',
      'Chạy giải pháp đó trên một máy ảo',
      '•',
      'Thứ nào sau đây dùng được để triển khai nhanh các giải pháp trên?',
    ],
    o: ['Virtual Machine Scale Sets', 'Azure Resource Groups', 'Azure Marketplace', 'Azure Web Apps'],
    e: [
      [
        'Azure Marketplace là cửa hàng trực tuyến cung cấp các ứng dụng và dịch vụ được xây dựng trên hoặc',
        'được thiết kế để tích hợp với đám mây công cộng Azure của Microsoft.',
      ],
    ],
  },

  680: {
    q: ['Những yếu tố nào sau đây ảnh hưởng tới chi phí compute của máy ảo? (Chọn HAI)'],
    o: [
      'Cỡ của máy ảo',
      'Data center nơi đặt máy ảo',
      'Resource group chứa máy ảo',
      'Region nơi đặt máy ảo',
    ],
  },

  682: {
    q: [
      'Thuật ngữ nào chỉ khả năng tăng năng lực tính toán của một máy ảo bằng cách thêm',
      'bộ nhớ hoặc CPU?',
    ],
    o: ['agility', 'vertical scaling', 'horizontal scaling', 'elasticity'],
  },

  683: {
    q: ['Thuật ngữ nào chỉ khả năng tăng năng lực tính toán bằng cách thêm nhiều máy ảo hơn?'],
    o: ['agility', 'vertical scaling', 'horizontal scaling', 'elasticity'],
  },

  684: {
    q: ['Scale-in và scale-out là những khái niệm liên quan tới Horizontal Scaling.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  685: {
    q: ['Scale-up và scale-down là những khái niệm liên quan tới Vertical Scaling.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  686: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Microsoft Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Cung cấp giải pháp để chạy và quản lý một nhóm máy ảo giống hệt nhau.',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: [
      'Azure Data Lake Analytics',
      'Azure Virtual Machine Scale Sets',
      'Azure Virtual Network',
      'Azure App Service',
    ],
  },

  687: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Microsoft Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Cung cấp một môi trường tách biệt để chạy máy ảo.',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: [
      'Azure Data Lake Analytics',
      'Azure Virtual Machine Scale Sets',
      'Azure Virtual Network',
      'Azure App Service',
    ],
    e: [
      [
        'Azure Virtual Network là hình ảnh đại diện cho mạng riêng của bạn trên đám mây. Đó là một vùng',
        'tách biệt về mặt logic trong đám mây Azure, dành riêng cho subscription của bạn, nơi có thể chạy các máy ảo',
        'được cô lập.',
      ],
    ],
  },

  688: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Microsoft Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Cung cấp một dịch vụ đám mây giúp biến đổi dữ liệu và rút ra những thông tin giá trị từ chính dữ liệu đó.',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: [
      'Azure Data Lake Analytics',
      'Azure Virtual Machine Scale Sets',
      'Azure Virtual Network',
      'Azure App Service',
    ],
    e: [
      [
        'Azure Data Lake Analytics là kiến trúc xử lý dữ liệu phân tán, chạy trên đám mây, do',
        'Microsoft cung cấp trên nền Azure.',
      ],
    ],
  },

  689: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Microsoft Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Chạy ứng dụng web, REST API và backend cho ứng dụng di động.',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: [
      'Azure Data Lake Analytics',
      'Azure Virtual Machine Scale Sets',
      'Azure Virtual Network',
      'Azure App Service',
    ],
  },

  690: {
    q: [
      'Bạn dự định tạo một máy ảo Azure. Bạn cần xác định dịch vụ lưu trữ nào phải được dùng để lưu',
      'các ổ đĩa dữ liệu unmanaged của máy ảo. Bạn nên chọn gì?',
    ],
    o: [
      'Blobs (lưu trữ đối tượng theo REST cho dữ liệu phi cấu trúc)',
      'Files (file share dùng chuẩn SMB 3.0)',
      'Tables (lưu trữ dữ liệu dạng bảng)',
      'Queues (mở rộng ứng dụng hiệu quả theo lưu lượng)',
    ],
  },

  691: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Dữ liệu lưu ở tầng Archive của một Azure storage account truy cập được bằng',
      'azcopy.exe.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì',
      'Chỉ đọc được bằng Azure Backup',
      'Phải được restore trước khi truy cập được',
      'Phải được rehydrate trước khi truy cập được',
    ],
  },

  692: {
    q: ['Một tài nguyên Azure có thể có nhiều delete lock.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  693: {
    q: ['Một tài nguyên Azure kế thừa lock từ resource group của nó.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Khi bạn áp một lock ở phạm vi cha, mọi tài nguyên trong phạm vi đó đều kế thừa cùng lock ấy.',
        '•',
        'Ngay cả tài nguyên bạn thêm vào sau cũng kế thừa lock từ cha. Lock nghiêm ngặt nhất trong chuỗi',
        '•',
        'kế thừa sẽ được ưu tiên.',
      ],
    ],
  },

  695: {
    q: [
      'Azure Advisor đưa ra khuyến nghị về cách cải thiện bảo mật cho một môi trường Azure Active',
      'Directory.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  696: {
    q: ['Azure Advisor đưa ra khuyến nghị về cách giảm chi phí vận hành máy ảo Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  697: {
    q: ['Azure Advisor đưa ra khuyến nghị về cách cấu hình thiết lập mạng trên máy ảo Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  698: {
    q: ['Bạn cấu hình được để activity log của Azure Active Directory (Azure AD) hiện trong Azure Monitor.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn gửi được activity log của Azure AD sang Azure Monitor logs để có được khả năng',
        'trực quan hoá phong phú, giám sát và cảnh báo trên dữ liệu đã kết nối.',
        'Mọi dữ liệu Azure Monitor thu thập đều thuộc một trong hai loại cơ bản: metric',
        'và log (bao gồm cả activity log của Azure AD). Activity log ghi lại thời điểm tài nguyên được',
        'tạo hoặc bị sửa. Metric cho biết tài nguyên hoạt động thế nào và',
        'nó đang tiêu thụ những tài nguyên nào.',
      ],
    ],
  },

  699: {
    q: ['Từ Azure Monitor, bạn giám sát được tài nguyên trải trên nhiều subscription Azure.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Monitor gom được các bản ghi log từ nhiều tài nguyên Azure,',
        'nhiều subscription và nhiều tenant về một nơi để phân tích cùng nhau.',
      ],
    ],
  },

  700: {
    q: ['Từ Azure Monitor, bạn tạo được cảnh báo.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn tạo được cảnh báo trong Azure Monitor.',
        'Cảnh báo trong Azure Monitor chủ động báo cho bạn về các điều kiện nghiêm trọng và có thể',
        'tự thực hiện hành động khắc phục. Quy tắc cảnh báo dựa trên metric cho cảnh báo gần như',
        'thời gian thực dựa trên giá trị số, còn quy tắc dựa trên log cho phép xử lý logic phức tạp',
        'trên dữ liệu từ nhiều nguồn.',
      ],
    ],
  },

  701: {
    q: ['Microsoft Defender for Cloud giám sát được cả tài nguyên Azure lẫn tài nguyên tại chỗ.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  702: {
    q: ['Mọi tính năng của Microsoft Defender for Cloud đều miễn phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  703: {
    q: ['Với Microsoft Defender for Cloud, bạn tải được báo cáo Regulatory Compliance.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  704: {
    q: ['Thêm resource group vào một subscription Azure sẽ làm phát sinh thêm chi phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Resource group là hộp chứa logic cho tài nguyên Azure. Bạn không phải trả tiền cho resource group.']],
  },

  705: {
    q: [
      'Lưu 1 TB dữ liệu trên Azure Blob storage luôn có cùng một mức giá, bất kể dữ liệu nằm ở region',
      'nào của Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Giá lưu trữ trên Azure thay đổi theo region. Nếu dùng trang giá của Azure storage, bạn',
        'chọn được các region khác nhau và thấy giá thay đổi ra sao theo từng region.',
      ],
    ],
  },

  706: {
    q: [
      'Khi dùng Azure Storage account loại general-purpose v2, bạn chỉ bị tính tiền theo lượng',
      'dữ liệu được lưu. Mọi thao tác đọc và ghi đều miễn phí.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Bạn bị tính tiền cho các thao tác đọc và ghi trên storage account general-purpose v2.']],
  },

  707: {
    q: [
      'Chép 10 GB dữ liệu lên Azure từ mạng tại chỗ qua VPN sẽ làm phát sinh thêm chi phí truyền',
      'dữ liệu trên Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Dữ liệu đi vào qua VPN là dữ liệu “đi vào” Azure qua VPN. Bạn không bị tính chi phí',
        'truyền dữ liệu cho phần đi vào.',
      ],
    ],
  },

  708: {
    q: [
      'Chép 10 GB dữ liệu từ Azure về mạng tại chỗ qua VPN sẽ làm phát sinh thêm chi phí truyền',
      'dữ liệu trên Azure.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [['Dữ liệu đi ra qua VPN là dữ liệu “đi ra khỏi” Azure qua VPN. Bạn bị tính tiền cho phần đi ra.']],
  },

  709: {
    q: ['Truyền dữ liệu giữa các Azure Storage account nằm ở những region khác nhau là miễn phí.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Bạn sẽ bị tính tiền cho các thao tác đọc ở storage account nguồn và thao tác ghi ở',
        'storage account đích.',
      ],
    ],
  },

  710: {
    q: ['Với Azure Active Directory Premium P2, mức sẵn sàng được bảo đảm là ít nhất 99,9 phần trăm.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Microsoft bảo đảm mức sẵn sàng ít nhất 99,9% cho các dịch vụ thuộc bản Azure Active Directory',
        'Premium.',
      ],
    ],
  },
};
