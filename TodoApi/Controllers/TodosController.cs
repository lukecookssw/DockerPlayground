using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Data.Entities;

namespace TodoApi.Controllers;

[ApiController]
[Route("[controller]")]
public class TodosController : ControllerBase
{
    private readonly TodoContext _context;

    private readonly ILogger<TodosController> _logger;

    public TodosController(ILogger<TodosController> logger, TodoContext context)
    {
        _logger     = logger;
        _context    = context;
    }

    [HttpGet("GetAll")]
    public async Task<IEnumerable<Todo>> Get(CancellationToken ct = default)
    {
        List<Todo> results = await _context.TodoItems.ToListAsync(ct);
        return results;
    }
}
